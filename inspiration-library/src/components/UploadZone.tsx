import { useRef, useState } from "react";
import { UploadCloudIcon } from "./icons";

interface Props {
  onFiles: (files: FileList) => void;
}

/** Inline, always-visible drop target — a discoverability hint that dragging works anywhere on the page. */
export function UploadZone({ onFiles }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`upload-drop ${isDragging ? "is-dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files?.length) onFiles(e.dataTransfer.files);
      }}
    >
      <div className="upload-drop-icon">
        <UploadCloudIcon width={20} height={20} />
      </div>
      <div className="upload-drop-text">
        <strong>Drag and drop</strong> screenshots anywhere on this page, or{" "}
        <button
          className="btn btn-ghost btn-sm"
          style={{ padding: "2px 6px", textDecoration: "underline" }}
          onClick={() => inputRef.current?.click()}
        >
          browse your files
        </button>
        . JPG, PNG, or WEBP, up to 25MB each.
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="visually-hidden"
        onChange={(e) => {
          if (e.target.files?.length) onFiles(e.target.files);
          e.target.value = "";
        }}
        aria-label="Browse for inspiration screenshots"
      />
    </div>
  );
}
