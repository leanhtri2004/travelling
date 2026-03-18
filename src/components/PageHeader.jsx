export default function PageHeader({
  title,
  subtitle,
  action,
  searchPlaceholder,
  showSearch = true,
  onSearchChange,
}) {
  const placeholder = searchPlaceholder || (title ? `Search ${title}` : "Search");
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-[200px]">
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle ? <p className="text-slate-500">{subtitle}</p> : null}
      </div>
      {showSearch ? (
        <div className="flex-1 min-w-[220px] max-w-md">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              className="app-search w-full pl-10 pr-4 py-2 text-sm"
              placeholder={placeholder}
              type="text"
              onChange={(event) => onSearchChange?.(event.target.value)}
            />
          </div>
        </div>
      ) : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
