export default function Dialog({ open, onClose, title, children, actions }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="mt-4 space-y-3">{children}</div>
        {actions ? <div className="mt-6 flex justify-end gap-2">{actions}</div> : null}
      </div>
    </div>
  );
}
