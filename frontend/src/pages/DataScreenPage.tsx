import { useMemo, useState } from 'react'
import {
  DATA_SCREEN_GROUPS,
  DATA_SCREEN_SECTIONS,
  dataScreenSectionSearchText,
  type DataScreenSection as Section,
} from '../data/dataScreen'
import { DataScreenSection } from '../components/dataScreen/DataScreenSection'

const STORAGE_KEY = 'cyberpunk-red-data-screen-open-sections-v1'

function loadOpenSections(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set(['skill-resolution', 'single-shot-dvs', 'armor', 'wound-states'])
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? new Set(parsed.filter((value): value is string => typeof value === 'string')) : new Set()
  } catch {
    return new Set()
  }
}

function normalize(value: string): string {
  return value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function DataScreenPage() {
  const [query, setQuery] = useState('')
  const [openSections, setOpenSections] = useState<Set<string>>(() => loadOpenSections())
  const normalizedQuery = normalize(query)

  const filteredSections = useMemo(() => {
    if (!normalizedQuery) return DATA_SCREEN_SECTIONS
    return DATA_SCREEN_SECTIONS.filter((section) => normalize(dataScreenSectionSearchText(section)).includes(normalizedQuery))
  }, [normalizedQuery])

  function commit(next: Set<string>) {
    setOpenSections(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
    } catch {
      // The Data Screen still works if storage is unavailable.
    }
  }

  function toggleSection(section: Section) {
    const next = new Set(openSections)
    if (next.has(section.id)) next.delete(section.id)
    else next.add(section.id)
    commit(next)
  }

  function expandAll() {
    commit(new Set(filteredSections.map((section) => section.id)))
  }

  function collapseAll() {
    commit(new Set())
  }

  return (
    <main className="page-shell data-screen-page">
      <section className="data-screen-hero">
        <div>
          <div className="eyebrow">CYBERPUNK RED // GM REFERENCE</div>
          <h1>Data Screen</h1>
          <p>
            A searchable, collapsible version of the four rules-reference panels from the Cyberpunk RED Data Screen.
          </p>
        </div>
        <div className="data-screen-source-badge">
          <span>Source</span>
          <strong>CR3011</strong>
          <small>Data Screen</small>
        </div>
      </section>

      <section className="data-screen-toolbar" aria-label="Data Screen controls">
        <label className="data-screen-search">
          <span>Search rules</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: autofire, armor, grapple, DV17..."
          />
        </label>
        <div className="data-screen-toolbar-actions">
          <button type="button" className="secondary-button data-screen-action" onClick={expandAll}>Expand All</button>
          <button type="button" className="secondary-button data-screen-action" onClick={collapseAll}>Collapse All</button>
        </div>
      </section>

      {normalizedQuery ? (
        <div className="data-screen-search-summary">
          <strong>{filteredSections.length}</strong> section{filteredSections.length === 1 ? '' : 's'} matching “{query.trim()}”
        </div>
      ) : null}

      {DATA_SCREEN_GROUPS.map((group) => {
        const sections = filteredSections.filter((section) => section.group === group.id)
        if (!sections.length) return null

        return (
          <section className="data-screen-group" key={group.id}>
            <header className="data-screen-group-header">
              <div>
                <div className="section-kicker">{group.eyebrow}</div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <span className="data-screen-group-count">{sections.length} refs</span>
            </header>
            <div className="data-screen-grid">
              {sections.map((section) => (
                <DataScreenSection
                  key={section.id}
                  section={section}
                  expanded={normalizedQuery ? true : openSections.has(section.id)}
                  onToggle={() => toggleSection(section)}
                />
              ))}
            </div>
          </section>
        )
      })}

      {filteredSections.length === 0 ? (
        <div className="data-screen-empty">
          <strong>No matching reference.</strong>
          <span>Try a rule name, Skill, DV, weapon type, injury, or action.</span>
          <button type="button" className="text-button" onClick={() => setQuery('')}>Clear search</button>
        </div>
      ) : null}

      <p className="data-screen-attribution">
        Reference content transcribed from the Cyberpunk RED Data Screen (CR3011). Presentation reorganized for quick digital lookup.
      </p>
    </main>
  )
}
