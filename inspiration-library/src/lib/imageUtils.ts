const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_RAW_BYTES = 25 * 1024 * 1024; // 25MB guard against pathological uploads
const MAX_DIMENSION = 2000; // longest edge, px
const JPEG_QUALITY = 0.85;

export interface ProcessedImage {
  blob: Blob;
  width: number;
  height: number;
}

export class ImageProcessingError extends Error {}

/**
 * Validate and compress an uploaded image file before it goes into
 * IndexedDB. Downscales anything larger than MAX_DIMENSION on its longest
 * edge and re-encodes as JPEG, which keeps large phone screenshots from
 * bloating local storage while staying visually lossless at gallery/detail
 * sizes.
 */
export async function processUploadedImage(file: File): Promise<ProcessedImage> {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    throw new ImageProcessingError(
      `"${file.name}" is a ${file.type || "unknown"} file. Please upload a JPG, PNG, WEBP, or GIF image.`
    );
  }
  if (file.size > MAX_RAW_BYTES) {
    throw new ImageProcessingError(
      `"${file.name}" is too large (${Math.round(file.size / 1024 / 1024)}MB). Please use an image under 25MB.`
    );
  }

  const bitmap = await loadBitmap(file);

  let { width, height } = bitmap;
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    const scale = MAX_DIMENSION / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new ImageProcessingError("Could not process this image in your browser.");
  ctx.drawImage(bitmap, 0, 0, width, height);

  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
  );
  if (!blob) {
    throw new ImageProcessingError(`Could not compress "${file.name}". Please try a different image.`);
  }

  return { blob, width, height };
}

async function loadBitmap(file: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file);
    } catch {
      // fall through to <img> fallback below (e.g. some GIFs / Safari quirks)
    }
  }
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new ImageProcessingError(`"${file.name}" could not be read as an image.`));
    };
    img.src = url;
  });
}
