import { getSourceLink } from '../data/sourceLinks'
import { compactSource } from '../utils/format'

interface Props {
  code: string | null
  page: number | null
  title?: string | null
  className?: string
}

export function SourceLink({ code, page, title, className }: Props) {
  const label = compactSource(code, page)
  if (!label) return null

  const source = getSourceLink(code)
  if (!source) return <span className={className}>{label}</span>

  const bookTitle = title ?? source.title
  const tooltip = `${source.linkLabel}${page ? ` — ${bookTitle}, p. ${page}` : ` — ${bookTitle}`}`

  return (
    <a
      className={className ? `${className} source-link` : 'source-link'}
      href={source.url}
      target="_blank"
      rel="noreferrer noopener"
      title={tooltip}
      aria-label={`${label}: ${source.linkLabel} (opens in a new tab)`}
    >
      <span>{label}</span>
      <span className="source-link-icon" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
