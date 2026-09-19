import type { Category, Inspiration } from "../data/types";
import { buildImagePrompt } from "../lib/promptGen";
import { buildWebsiteBrief } from "../lib/briefGen";
import { useToast } from "../hooks/useToast";
import { CopyIcon, EditIcon, FileTextIcon, TrashIcon } from "./icons";

interface Props {
  inspiration: Inspiration;
  categoryById: (id: string) => Category | undefined;
  detailView: boolean;
  onOpen: () => void;
  onEdit: () => void;
  onDeleteRequest: () => void;
}

export function InspirationCard({ inspiration, categoryById, detailView, onOpen, onEdit, onDeleteRequest }: Props) {
  const { show } = useToast();
  const primary = categoryById(inspiration.primaryCategory);
  const secondaries = inspiration.secondaryCategories.map(categoryById).filter(Boolean) as Category[];

  const copyPrompt = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(buildImagePrompt(inspiration));
      show("Image prompt copied to clipboard.");
    } catch {
      show("Couldn't copy — your browser blocked clipboard access.", "error");
    }
  };

  const copyBrief = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(buildWebsiteBrief(inspiration, primary));
      show("Website brief copied to clipboard.");
    } catch {
      show("Couldn't copy — your browser blocked clipboard access.", "error");
    }
  };

  return (
    <article className="insp-card">
      <button className="insp-card-media" onClick={onOpen} aria-label={`View analysis for ${inspiration.title}`}>
        {inspiration.imageSrc ? (
          <img src={inspiration.imageSrc} alt={inspiration.title} loading="lazy" />
        ) : null}
        {inspiration.needsAnalysis && <span className="badge badge-needs-analysis">Needs Analysis</span>}
      </button>
      <div className="insp-card-body">
        <div className="insp-card-title">{inspiration.title}</div>
        {(primary || secondaries.length > 0) && (
          <div className="insp-card-categories">
            {primary && <span className="category-pill">{primary.name}</span>}
            {secondaries.map((c) => (
              <span key={c.id} className="category-pill category-pill--secondary">
                {c.name}
              </span>
            ))}
          </div>
        )}
        {inspiration.description && <p className="insp-card-description">{inspiration.description}</p>}
        {detailView && inspiration.tags.length > 0 && (
          <div className="insp-card-tags">
            {inspiration.tags.slice(0, 6).map((t) => (
              <span key={t} className="mini-tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="insp-card-actions">
          <button className="btn btn-secondary btn-sm" onClick={onOpen}>
            View Analysis
          </button>
          <div className="insp-card-icon-actions">
            <button className="icon-btn" title="Copy Image Prompt" aria-label="Copy image prompt" onClick={copyPrompt}>
              <CopyIcon width={15} height={15} />
            </button>
            <button className="icon-btn" title="Copy Website Brief" aria-label="Copy website brief" onClick={copyBrief}>
              <FileTextIcon width={15} height={15} />
            </button>
            <button
              className="icon-btn"
              title="Edit"
              aria-label={`Edit ${inspiration.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
            >
              <EditIcon width={15} height={15} />
            </button>
            <button
              className="icon-btn"
              title="Delete"
              aria-label={`Delete ${inspiration.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteRequest();
              }}
            >
              <TrashIcon width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
