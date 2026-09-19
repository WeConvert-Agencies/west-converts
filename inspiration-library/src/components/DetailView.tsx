import { useEffect, useState } from "react";
import type { Analysis, BriefColor, Category, Inspiration } from "../data/types";
import { buildImagePrompt } from "../lib/promptGen";
import { buildWebsiteBrief } from "../lib/briefGen";
import { useToast } from "../hooks/useToast";
import { CopyIcon, EditIcon, PlusIcon, TrashIcon, XIcon } from "./icons";

type Tab = "analysis" | "prompt" | "brief";

interface Props {
  inspiration: Inspiration;
  categories: Category[];
  categoryById: (id: string) => Category | undefined;
  initialEditing?: boolean;
  onClose: () => void;
  onSave: (updated: Inspiration) => void;
  onDeleteRequest: () => void;
}

const VOCAB_LABELS: Record<keyof Analysis["vocabulary"], string> = {
  layout: "Layout",
  composition: "Composition",
  typography: "Typography",
  color: "Color",
  contrast: "Contrast",
  spacing: "Spacing",
  shapes: "Shapes",
  imagery: "Imagery",
  texture: "Texture",
  hierarchy: "Visual hierarchy",
  interfaceStyle: "Interface style",
  motion: "Motion / interaction",
};

const LAYOUT_LABELS: Record<keyof Analysis["layout"], string> = {
  header: "Header / navigation",
  hero: "Hero section",
  hierarchy: "Content hierarchy",
  grid: "Grid / column system",
  cta: "Calls to action",
  imagePlacement: "Image placement",
  transitions: "Section transitions",
  footer: "Footer",
};

export function DetailView({ inspiration, categories, categoryById, initialEditing, onClose, onSave, onDeleteRequest }: Props) {
  const { show } = useToast();
  const [tab, setTab] = useState<Tab>("analysis");
  const [isEditing, setIsEditing] = useState(!!initialEditing);
  const [draft, setDraft] = useState<Inspiration>(inspiration);

  useEffect(() => {
    setDraft(inspiration);
  }, [inspiration]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const primary = categoryById(draft.primaryCategory);

  const startEdit = () => {
    setDraft(inspiration);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraft(inspiration);
    setIsEditing(false);
  };

  const save = () => {
    onSave(draft);
    setIsEditing(false);
    show("Inspiration saved.");
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(buildImagePrompt(inspiration));
      show("Image prompt copied to clipboard.");
    } catch {
      show("Couldn't copy — your browser blocked clipboard access.", "error");
    }
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildWebsiteBrief(inspiration, primary));
      show("Website brief copied to clipboard.");
    } catch {
      show("Couldn't copy — your browser blocked clipboard access.", "error");
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="detail-header">
          <div style={{ flex: 1, minWidth: 0 }}>
            {isEditing ? (
              <input
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                aria-label="Inspiration title"
                style={{ fontSize: 18, fontWeight: 650, width: "100%", border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px" }}
              />
            ) : (
              <h2 id="detail-title">{inspiration.title}</h2>
            )}
          </div>
          <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            {!isEditing && (
              <button className="btn btn-secondary btn-sm" onClick={startEdit}>
                <EditIcon width={14} height={14} />
                Edit
              </button>
            )}
            <button className="icon-btn" aria-label="Close" onClick={onClose} style={{ border: "1px solid var(--border)" }}>
              <XIcon width={16} height={16} />
            </button>
          </div>
        </div>

        <div className="detail-tabs" role="tablist" aria-label="Inspiration detail sections">
          <button className="detail-tab" role="tab" aria-selected={tab === "analysis"} onClick={() => setTab("analysis")}>
            Design Analysis
          </button>
          <button className="detail-tab" role="tab" aria-selected={tab === "prompt"} onClick={() => setTab("prompt")}>
            Image Prompt
          </button>
          <button className="detail-tab" role="tab" aria-selected={tab === "brief"} onClick={() => setTab("brief")}>
            Website Brief
          </button>
        </div>

        <div className="detail-body">
          <div className="detail-media">
            {inspiration.imageSrc ? <img src={inspiration.imageSrc} alt={inspiration.title} /> : <div>No image</div>}
          </div>

          <div className="detail-panel">
            {/* ---- Core info, always visible above the tabs' content ---- */}
            <div className="detail-section">
              {isEditing ? (
                <EditCoreInfo draft={draft} setDraft={setDraft} categories={categories} />
              ) : (
                <ViewCoreInfo inspiration={inspiration} primary={primary} categoryById={categoryById} />
              )}
            </div>

            {tab === "analysis" &&
              (isEditing ? (
                <EditAnalysis draft={draft} setDraft={setDraft} />
              ) : (
                <ViewAnalysis analysis={inspiration.analysis} />
              ))}

            {tab === "prompt" &&
              (isEditing ? (
                <EditImagePrompt draft={draft} setDraft={setDraft} />
              ) : (
                <ViewImagePrompt inspiration={inspiration} onCopy={copyPrompt} />
              ))}

            {tab === "brief" &&
              (isEditing ? (
                <EditBrief draft={draft} setDraft={setDraft} />
              ) : (
                <ViewBrief inspiration={inspiration} primary={primary} onCopy={copyBrief} />
              ))}
          </div>
        </div>

        <div className="detail-actions-footer">
          {isEditing ? (
            <>
              <button className="btn btn-primary" onClick={save}>
                Save changes
              </button>
              <button className="btn btn-secondary" onClick={cancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={copyPrompt}>
                <CopyIcon width={14} height={14} />
                Copy Image Prompt
              </button>
              <button className="btn btn-secondary" onClick={copyBrief}>
                <CopyIcon width={14} height={14} />
                Copy Website Brief
              </button>
              <button className="btn btn-danger" style={{ marginLeft: "auto" }} onClick={onDeleteRequest}>
                <TrashIcon width={14} height={14} />
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// View components
// ---------------------------------------------------------------------------

function ViewCoreInfo({
  inspiration,
  primary,
  categoryById,
}: {
  inspiration: Inspiration;
  primary?: Category;
  categoryById: (id: string) => Category | undefined;
}) {
  const secondaries = inspiration.secondaryCategories.map(categoryById).filter(Boolean) as Category[];
  return (
    <>
      {inspiration.needsAnalysis && (
        <span className="badge badge-needs-analysis" style={{ position: "static", display: "inline-block", width: "fit-content" }}>
          Needs Analysis
        </span>
      )}
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
      {inspiration.description && <p>{inspiration.description}</p>}
      {inspiration.tags.length > 0 && (
        <div className="insp-card-tags">
          {inspiration.tags.map((t) => (
            <span key={t} className="mini-tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

function ViewAnalysis({ analysis }: { analysis: Analysis }) {
  const hasAnything =
    analysis.styleName || analysis.whatItIs || analysis.whyItWorks || analysis.keywords.length;
  if (!hasAnything) {
    return (
      <div className="detail-section">
        <p style={{ color: "var(--text-muted)" }}>
          This inspiration hasn't been analyzed yet. Click <strong>Edit</strong> to fill in its design style,
          vocabulary, and keywords.
        </p>
      </div>
    );
  }
  return (
    <>
      {analysis.styleName && (
        <div className="detail-section">
          <h3>Design Style</h3>
          <p style={{ fontSize: 16, fontWeight: 600 }}>{analysis.styleName}</p>
        </div>
      )}
      {analysis.whatItIs && (
        <div className="detail-section">
          <h3>What It Is</h3>
          <p>{analysis.whatItIs}</p>
        </div>
      )}
      {analysis.whyItWorks && (
        <div className="detail-section">
          <h3>Why It Works</h3>
          <p>{analysis.whyItWorks}</p>
        </div>
      )}
      {Object.values(analysis.vocabulary).some(Boolean) && (
        <div className="detail-section">
          <h3>Design Vocabulary</h3>
          <dl className="vocab-grid">
            {(Object.keys(VOCAB_LABELS) as (keyof Analysis["vocabulary"])[]).map(
              (k) =>
                analysis.vocabulary[k] && (
                  <div className="vocab-item" key={k}>
                    <dt>{VOCAB_LABELS[k]}</dt>
                    <dd>{analysis.vocabulary[k]}</dd>
                  </div>
                )
            )}
          </dl>
        </div>
      )}
      {analysis.keywords.length > 0 && (
        <div className="detail-section">
          <h3>Keywords</h3>
          <div className="keyword-list">
            {analysis.keywords.map((k) => (
              <span key={k} className="mini-tag">
                {k}
              </span>
            ))}
          </div>
        </div>
      )}
      {Object.values(analysis.layout).some(Boolean) && (
        <div className="detail-section">
          <h3>Layout Breakdown</h3>
          <dl className="vocab-grid">
            {(Object.keys(LAYOUT_LABELS) as (keyof Analysis["layout"])[]).map(
              (k) =>
                analysis.layout[k] && (
                  <div className="vocab-item" key={k}>
                    <dt>{LAYOUT_LABELS[k]}</dt>
                    <dd>{analysis.layout[k]}</dd>
                  </div>
                )
            )}
          </dl>
        </div>
      )}
      {analysis.reusableElements.length > 0 && (
        <div className="detail-section">
          <h3>Reusable Elements</h3>
          <ul className="bullet-list">
            {analysis.reusableElements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
      {analysis.avoidCopying.length > 0 && (
        <div className="detail-section">
          <h3>Avoid Copying</h3>
          <ul className="bullet-list avoid-list">
            {analysis.avoidCopying.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function ViewImagePrompt({ inspiration, onCopy }: { inspiration: Inspiration; onCopy: () => void }) {
  const text = buildImagePrompt(inspiration);
  return (
    <div className="detail-section">
      <h3>Composed Prompt</h3>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 13.5, lineHeight: 1.6, background: "var(--surface-sunken)", padding: 14, borderRadius: "var(--radius-md)", margin: 0 }}>
        {text}
      </pre>
      <button className="btn btn-primary" style={{ alignSelf: "flex-start" }} onClick={onCopy}>
        <CopyIcon width={14} height={14} />
        Copy Image Prompt
      </button>
    </div>
  );
}

function ViewBrief({ inspiration, primary, onCopy }: { inspiration: Inspiration; primary?: Category; onCopy: () => void }) {
  const text = buildWebsiteBrief(inspiration, primary);
  return (
    <div className="detail-section">
      <h3>Composed Brief</h3>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: 13.5, lineHeight: 1.6, background: "var(--surface-sunken)", padding: 14, borderRadius: "var(--radius-md)", margin: 0, maxHeight: 420, overflowY: "auto" }}>
        {text}
      </pre>
      <button className="btn btn-primary" style={{ alignSelf: "flex-start" }} onClick={onCopy}>
        <CopyIcon width={14} height={14} />
        Copy Website Brief
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Edit components
// ---------------------------------------------------------------------------

function EditCoreInfo({
  draft,
  setDraft,
  categories,
}: {
  draft: Inspiration;
  setDraft: (i: Inspiration) => void;
  categories: Category[];
}) {
  return (
    <div className="stack">
      <div className="checkbox-chip" style={{ width: "fit-content" }}>
        <input
          type="checkbox"
          id="needs-analysis-toggle"
          checked={draft.needsAnalysis}
          onChange={(e) => setDraft({ ...draft, needsAnalysis: e.target.checked })}
        />
        <label htmlFor="needs-analysis-toggle">Still needs analysis</label>
      </div>

      <div className="field-row">
        <div className="field-group">
          <label htmlFor="primary-cat">Primary category</label>
          <select
            id="primary-cat"
            value={draft.primaryCategory}
            onChange={(e) => setDraft({ ...draft, primaryCategory: e.target.value })}
          >
            <option value="">— choose —</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field-group">
        <label>Secondary categories</label>
        <div className="checkbox-grid">
          {categories
            .filter((c) => c.id !== draft.primaryCategory)
            .map((c) => {
              const checked = draft.secondaryCategories.includes(c.id);
              return (
                <label className="checkbox-chip" key={c.id}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      setDraft({
                        ...draft,
                        secondaryCategories: checked
                          ? draft.secondaryCategories.filter((id) => id !== c.id)
                          : [...draft.secondaryCategories, c.id],
                      })
                    }
                  />
                  {c.name}
                </label>
              );
            })}
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="description">Short description</label>
        <textarea
          id="description"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
        />
      </div>

      <div className="field-group">
        <label htmlFor="tags">Keywords/tags (comma-separated)</label>
        <input
          id="tags"
          value={draft.tags.join(", ")}
          onChange={(e) =>
            setDraft({ ...draft, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })
          }
        />
      </div>
    </div>
  );
}

function ListEditor({ label, values, onChange, hint }: { label: string; values: string[]; onChange: (v: string[]) => void; hint?: string }) {
  return (
    <div className="field-group">
      <label>{label}</label>
      <textarea
        value={values.join("\n")}
        onChange={(e) => onChange(e.target.value.split("\n").map((v) => v).filter((v) => v.trim().length > 0))}
        placeholder="One per line"
      />
      {hint && <span className="chip-textarea-hint">{hint}</span>}
    </div>
  );
}

function EditAnalysis({ draft, setDraft }: { draft: Inspiration; setDraft: (i: Inspiration) => void }) {
  const a = draft.analysis;
  const setA = (next: Partial<Analysis>) => setDraft({ ...draft, analysis: { ...a, ...next } });

  return (
    <div className="stack">
      <div className="field-group">
        <label htmlFor="style-name">Design style name</label>
        <input id="style-name" value={a.styleName} onChange={(e) => setA({ styleName: e.target.value })} placeholder="e.g. Sculptural Lowercase Modernism" />
      </div>
      <div className="field-group">
        <label htmlFor="what-it-is">What it is</label>
        <textarea id="what-it-is" value={a.whatItIs} onChange={(e) => setA({ whatItIs: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="why-it-works">Why it works</label>
        <textarea id="why-it-works" value={a.whyItWorks} onChange={(e) => setA({ whyItWorks: e.target.value })} />
      </div>

      <div className="field-group">
        <label>Design vocabulary</label>
        <div className="vocab-grid">
          {(Object.keys(VOCAB_LABELS) as (keyof Analysis["vocabulary"])[]).map((k) => (
            <div className="field-group" key={k}>
              <label htmlFor={`vocab-${k}`}>{VOCAB_LABELS[k]}</label>
              <input
                id={`vocab-${k}`}
                value={a.vocabulary[k]}
                onChange={(e) => setA({ vocabulary: { ...a.vocabulary, [k]: e.target.value } })}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="keywords">Keywords (comma-separated, 8–15 recommended)</label>
        <textarea
          id="keywords"
          value={a.keywords.join(", ")}
          onChange={(e) => setA({ keywords: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
        />
      </div>

      <div className="field-group">
        <label>Layout breakdown</label>
        <div className="stack">
          {(Object.keys(LAYOUT_LABELS) as (keyof Analysis["layout"])[]).map((k) => (
            <div className="field-group" key={k}>
              <label htmlFor={`layout-${k}`}>{LAYOUT_LABELS[k]}</label>
              <input
                id={`layout-${k}`}
                value={a.layout[k]}
                onChange={(e) => setA({ layout: { ...a.layout, [k]: e.target.value } })}
              />
            </div>
          ))}
        </div>
      </div>

      <ListEditor
        label="Reusable elements"
        values={a.reusableElements}
        onChange={(v) => setA({ reusableElements: v })}
        hint="One idea per line"
      />
      <ListEditor
        label="Avoid copying"
        values={a.avoidCopying}
        onChange={(v) => setA({ avoidCopying: v })}
        hint="One item per line — names, logos, exact layouts, etc."
      />
    </div>
  );
}

function EditImagePrompt({ draft, setDraft }: { draft: Inspiration; setDraft: (i: Inspiration) => void }) {
  const f = draft.imagePromptFields;
  const setF = (next: Partial<typeof f>) => setDraft({ ...draft, imagePromptFields: { ...f, ...next } });

  const fields: { key: keyof typeof f; label: string; area?: boolean }[] = [
    { key: "subject", label: "Subject / scene", area: true },
    { key: "composition", label: "Composition", area: true },
    { key: "colorPalette", label: "Color palette" },
    { key: "lighting", label: "Lighting" },
    { key: "mood", label: "Mood" },
    { key: "texture", label: "Texture" },
    { key: "perspective", label: "Perspective / camera style" },
    { key: "renderStyle", label: "Illustration / photography / 3D / render style" },
    { key: "placement", label: "Intended placement on the website", area: true },
    { key: "aspectRatio", label: "Suitable aspect ratio" },
    { key: "negative", label: "Negative instructions", area: true },
  ];

  return (
    <div className="stack">
      {fields.map(({ key, label, area }) => (
        <div className="field-group" key={key}>
          <label htmlFor={`prompt-${key}`}>{label}</label>
          {area ? (
            <textarea id={`prompt-${key}`} value={f[key]} onChange={(e) => setF({ [key]: e.target.value } as Partial<typeof f>)} />
          ) : (
            <input id={`prompt-${key}`} value={f[key]} onChange={(e) => setF({ [key]: e.target.value } as Partial<typeof f>)} />
          )}
        </div>
      ))}
    </div>
  );
}

function EditBrief({ draft, setDraft }: { draft: Inspiration; setDraft: (i: Inspiration) => void }) {
  const b = draft.briefFields;
  const setB = (next: Partial<typeof b>) => setDraft({ ...draft, briefFields: { ...b, ...next } });

  const addColor = () => setB({ colorPalette: [...b.colorPalette, { name: "", hex: "#000000" }] });
  const updateColor = (i: number, next: Partial<BriefColor>) =>
    setB({ colorPalette: b.colorPalette.map((c, idx) => (idx === i ? { ...c, ...next } : c)) });
  const removeColor = (i: number) => setB({ colorPalette: b.colorPalette.filter((_, idx) => idx !== i) });

  return (
    <div className="stack">
      <div className="field-group">
        <label htmlFor="visual-direction">Visual direction summary</label>
        <textarea id="visual-direction" value={b.visualDirection} onChange={(e) => setB({ visualDirection: e.target.value })} />
      </div>

      <div className="field-group">
        <label>Suggested color palette</label>
        <div className="stack">
          {b.colorPalette.map((c, i) => (
            <div className="color-row" key={i}>
              <span className="color-swatch" style={{ background: /^#[0-9a-fA-F]{3,8}$/.test(c.hex) ? c.hex : "transparent" }} />
              <input
                value={c.name}
                placeholder="Name"
                onChange={(e) => updateColor(i, { name: e.target.value })}
                style={{ flex: 1, border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px" }}
              />
              <input
                value={c.hex}
                placeholder="#hex"
                onChange={(e) => updateColor(i, { hex: e.target.value })}
                style={{ width: 100, border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px" }}
              />
              <button className="icon-btn" aria-label="Remove color" onClick={() => removeColor(i)}>
                <TrashIcon width={13} height={13} />
              </button>
            </div>
          ))}
          <button className="btn btn-ghost btn-sm" style={{ alignSelf: "flex-start" }} onClick={addColor}>
            <PlusIcon width={13} height={13} />
            Add color
          </button>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="typography">Typography direction</label>
        <textarea id="typography" value={b.typography} onChange={(e) => setB({ typography: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="layout-system">Layout and spacing system</label>
        <textarea id="layout-system" value={b.layoutSystem} onChange={(e) => setB({ layoutSystem: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="hero-direction">Hero-section direction</label>
        <textarea id="hero-direction" value={b.heroDirection} onChange={(e) => setB({ heroDirection: e.target.value })} />
      </div>

      <ListEditor label="Recommended page sections" values={b.sections} onChange={(v) => setB({ sections: v })} hint="One section per line" />

      <div className="field-group">
        <label htmlFor="cta-style">Buttons and CTA style</label>
        <textarea id="cta-style" value={b.ctaStyle} onChange={(e) => setB({ ctaStyle: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="card-style">Card and component styling</label>
        <textarea id="card-style" value={b.cardStyle} onChange={(e) => setB({ cardStyle: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="image-direction">Image direction</label>
        <textarea id="image-direction" value={b.imageDirection} onChange={(e) => setB({ imageDirection: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="mobile-behavior">Responsive / mobile behavior</label>
        <textarea id="mobile-behavior" value={b.mobileBehavior} onChange={(e) => setB({ mobileBehavior: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="interaction-ideas">Subtle interaction / animation ideas</label>
        <textarea id="interaction-ideas" value={b.interactionIdeas} onChange={(e) => setB({ interactionIdeas: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="accessibility">Accessibility requirements</label>
        <textarea id="accessibility" value={b.accessibility} onChange={(e) => setB({ accessibility: e.target.value })} />
      </div>
      <div className="field-group">
        <label htmlFor="conversion">Conversion-focused recommendations</label>
        <textarea id="conversion" value={b.conversion} onChange={(e) => setB({ conversion: e.target.value })} />
      </div>
    </div>
  );
}
