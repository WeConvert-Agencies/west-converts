import type { Category, Inspiration, ViewMode } from "../data/types";
import { InspirationCard } from "./InspirationCard";

interface Props {
  items: Inspiration[];
  categoryById: (id: string) => Category | undefined;
  viewMode: ViewMode;
  onOpen: (id: string) => void;
  onEdit: (id: string) => void;
  onDeleteRequest: (id: string) => void;
}

export function GalleryGrid({ items, categoryById, viewMode, onOpen, onEdit, onDeleteRequest }: Props) {
  return (
    <div className={`gallery-grid ${viewMode === "detail" ? "gallery-grid--detail" : ""}`}>
      {items.map((insp) => (
        <InspirationCard
          key={insp.id}
          inspiration={insp}
          categoryById={categoryById}
          detailView={viewMode === "detail"}
          onOpen={() => onOpen(insp.id)}
          onEdit={() => onEdit(insp.id)}
          onDeleteRequest={() => onDeleteRequest(insp.id)}
        />
      ))}
    </div>
  );
}
