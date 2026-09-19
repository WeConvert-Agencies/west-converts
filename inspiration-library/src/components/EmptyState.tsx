import { ImageIcon } from "./icons";

interface Props {
  hasAnyInspirations: boolean;
  onUploadClick: () => void;
}

export function EmptyState({ hasAnyInspirations, onUploadClick }: Props) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <ImageIcon width={26} height={26} />
      </div>
      {hasAnyInspirations ? (
        <>
          <h2>No inspirations match these filters</h2>
          <p>Try clearing your search, category, or tag filters to see more of your library.</p>
        </>
      ) : (
        <>
          <h2>Start your inspiration library</h2>
          <p>
            Drag and drop a screenshot anywhere on this page, or use the button below, to add the
            first website you like. Each new upload starts as <strong>Needs Analysis</strong> — fill
            in its style, vocabulary, and keywords whenever you're ready.
          </p>
          <button className="btn btn-primary" onClick={onUploadClick}>
            Add your first inspiration
          </button>
        </>
      )}
    </div>
  );
}
