import type { DataScreenSection as Section } from '../../data/dataScreen'
import { ReferenceTable } from './ReferenceTable'

interface Props {
  section: Section
  expanded: boolean
  onToggle: () => void
}

export function DataScreenSection({ section, expanded, onToggle }: Props) {
  return (
    <article className={section.wide ? 'data-screen-card data-screen-card-wide' : 'data-screen-card'}>
      <button
        className="data-screen-card-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={`data-screen-${section.id}`}
        onClick={onToggle}
      >
        <span className="data-screen-card-chevron" aria-hidden="true">{expanded ? '−' : '+'}</span>
        <span className="data-screen-card-title">{section.title}</span>
        <span className="data-screen-page-ref">DS p. {section.sourcePage}</span>
      </button>

      {expanded ? (
        <div className="data-screen-card-body" id={`data-screen-${section.id}`}>
          {section.blocks.map((block, blockIndex) => {
            if (block.type === 'paragraph') {
              return <p key={blockIndex}>{block.text}</p>
            }
            if (block.type === 'subheading') {
              return <h4 key={blockIndex}>{block.text}</h4>
            }
            if (block.type === 'formula') {
              return (
                <div className="data-screen-formula" key={blockIndex}>
                  {block.lines.map((line) => <strong key={line}>{line}</strong>)}
                  {block.note ? <small>{block.note}</small> : null}
                </div>
              )
            }
            return (
              <ReferenceTable
                key={blockIndex}
                columns={block.columns}
                rows={block.rows}
                compact={block.compact}
              />
            )
          })}
        </div>
      ) : null}
    </article>
  )
}
