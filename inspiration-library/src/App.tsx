import { useCallback, useState } from "react";
import { useLibrary } from "./hooks/useLibrary";
import { Sidebar } from "./components/Sidebar";
import { Toolbar } from "./components/Toolbar";
import { GalleryGrid } from "./components/GalleryGrid";
import { EmptyState } from "./components/EmptyState";
import { UploadZone } from "./components/UploadZone";
import { DetailView } from "./components/DetailView";
import { ConfirmDialog } from "./components/ConfirmDialog";
import type { ViewMode } from "./data/types";
import { UploadCloudIcon } from "./components/icons";

export default function App() {
  const lib = useLibrary();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [openId, setOpenId] = useState<string | null>(null);
  const [openInEditMode, setOpenInEditMode] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleteCategoryTargetId, setDeleteCategoryTargetId] = useState<string | null>(null);
  const [isDraggingPage, setIsDraggingPage] = useState(false);

  const openDetail = (id: string, edit = false) => {
    setOpenId(id);
    setOpenInEditMode(edit);
  };

  const openInsp = lib.inspirations.find((i) => i.id === openId) || null;
  const deleteTarget = lib.inspirations.find((i) => i.id === deleteTargetId) || null;
  const deleteCategoryTarget = lib.categories.find((c) => c.id === deleteCategoryTargetId) || null;

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    if (!e.dataTransfer.types.includes("Files")) return;
    e.preventDefault();
    setIsDraggingPage(true);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    if (!e.dataTransfer.types.includes("Files")) return;
    e.preventDefault();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    if (e.clientX === 0 && e.clientY === 0) setIsDraggingPage(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDraggingPage(false);
      if (e.dataTransfer.files?.length) lib.addFilesFromUpload(e.dataTransfer.files);
    },
    [lib]
  );

  return (
    <div
      className="app-shell"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Sidebar
        categories={lib.categories}
        inspirations={lib.inspirations}
        allTags={lib.allTags}
        filters={lib.filters}
        setFilters={lib.setFilters}
        onAddCategory={lib.addCategory}
        onRenameCategory={lib.renameCategory}
        onDeleteCategoryRequest={setDeleteCategoryTargetId}
        onExport={lib.doExport}
        onImportFile={lib.doImport}
      />

      <div className="main-col">
        <Toolbar
          filters={lib.filters}
          setFilters={lib.setFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onFilesSelected={lib.addFilesFromUpload}
        />

        <div className="content-area">
          {lib.loading ? (
            <div className="loading-shell">Loading your library…</div>
          ) : (
            <>
              <UploadZone onFiles={lib.addFilesFromUpload} />

              {lib.filtered.length === 0 ? (
                <EmptyState
                  hasAnyInspirations={lib.inspirations.length > 0}
                  onUploadClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
                />
              ) : (
                <>
                  <p className="result-count">
                    {lib.filtered.length} inspiration{lib.filtered.length === 1 ? "" : "s"}
                  </p>
                  <GalleryGrid
                    items={lib.filtered}
                    categoryById={lib.categoryById}
                    viewMode={viewMode}
                    onOpen={(id) => openDetail(id)}
                    onEdit={(id) => openDetail(id, true)}
                    onDeleteRequest={setDeleteTargetId}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      {isDraggingPage && (
        <div className="drag-overlay">
          <div className="drag-overlay-box" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <UploadCloudIcon width={26} height={26} />
            Drop screenshots to add them to your library
          </div>
        </div>
      )}

      {openInsp && (
        <DetailView
          inspiration={openInsp}
          categories={lib.categories}
          categoryById={lib.categoryById}
          initialEditing={openInEditMode}
          onClose={() => setOpenId(null)}
          onSave={(updated) => lib.updateInspiration(updated)}
          onDeleteRequest={() => setDeleteTargetId(openInsp.id)}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Delete this inspiration?"
          message={`"${deleteTarget.title}" and its analysis will be permanently removed from your library. This can't be undone.`}
          confirmLabel="Delete"
          danger
          onCancel={() => setDeleteTargetId(null)}
          onConfirm={() => {
            lib.deleteInspirationById(deleteTarget.id);
            setDeleteTargetId(null);
            if (openId === deleteTarget.id) setOpenId(null);
          }}
        />
      )}

      {deleteCategoryTarget && (
        <ConfirmDialog
          title="Delete this category?"
          message={`"${deleteCategoryTarget.name}" will be removed. Inspirations using it will keep their other categories and tags, but will lose this one.`}
          confirmLabel="Delete category"
          danger
          onCancel={() => setDeleteCategoryTargetId(null)}
          onConfirm={() => {
            lib.deleteCategoryById(deleteCategoryTarget.id);
            setDeleteCategoryTargetId(null);
          }}
        />
      )}
    </div>
  );
}
