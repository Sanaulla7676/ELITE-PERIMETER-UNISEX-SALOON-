import type { ReactNode } from "react";

type SeoDataTableProps = {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
  className?: string;
};

export function SeoDataTable({ caption, headers, rows, className = "" }: SeoDataTableProps) {
  return (
    <div className={`seo-data-table-wrap ${className}`}>
      <table className="seo-data-table">
        <caption>{caption}</caption>
        <thead>
          <tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
