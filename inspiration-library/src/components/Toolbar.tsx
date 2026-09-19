import { useRef } from "react";
import type { SortKey, ViewMode } from "../data/types";
import type { LibraryFilters } from "../hooks/useLibrary";
import { GridIcon, ListLargeIcon, SearchIcon, UploadIcon } from "./icons";

interface Props {
  filters: LibraryFilters;
  setFilters: React.Dispatch<React.SetStateAction<LibraryFilters>>;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  onFilesSelected: (files: FileList) => void;
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title", label: "Title (A–Z)" },
  { value: "category", label: "Category" },
];

export function Toolbar({ filters, setFilters, viewMode, setViewMode, onFilesSelected }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="toolbar">
      <div className="search-field">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search by title, keyword, category, or characteristic…"
          value={filters.query}
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
          aria-label="Search inspirations"
        />
      </div>

      <select
        className="select-control"
        value={filters.sort}
        onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value as SortKey }))}
        aria-label="Sort inspirations"
      >
        {SORT_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <div className="view-toggle" role="group" aria-label="Gallery view mode">
        <button aria-pressed={viewMode === "grid"} aria-label="Grid view" onClick={() => setViewMode("grid")}>
          <GridIcon />
        </button>
        <button aria-pressed={viewMode === "detail"} aria-label="Larger detail view" onClick={() => setViewMode("detail")}>
          <ListLargeIcon />
        </button>
      </div>

      <button className="btn btn-primary" onClick={() => fileInputRef.current?.click()}>
        <UploadIcon width={15} height={15} />
        Add Inspiration
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="visually-hidden"
        onChange={(e) => {
          if (e.target.files?.length) onFilesSelected(e.target.files);
          e.target.value = "";
        }}
        aria-label="Upload inspiration screenshots"
      />
    </div>
  );
}
