import { cn } from '@/lib/utils'

export function SectionLabel({ index, label, className }: { index: string; label: string; className?: string }) {
  return (
    <p className={cn('flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]', className)}>
      <span className="rounded-full border border-current px-2.5 py-1 opacity-80">{`course_${index}`}</span>
      <span>{label}</span>
    </p>
  )
}
