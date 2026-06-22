export default function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <span className="text-sm font-semibold text-emerald-600 uppercase tracking-widest">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
    </div>
  )
}
