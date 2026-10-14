interface Props {
  columns: string[]
  rows: string[][]
  compact?: boolean
}

export function ReferenceTable({ columns, rows, compact = false }: Props) {
  return (
    <div className="data-table-scroll">
      <table className={compact ? 'data-table data-table-compact' : 'data-table'}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                cellIndex === 0
                  ? <th key={cellIndex} scope="row">{cell}</th>
                  : <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
