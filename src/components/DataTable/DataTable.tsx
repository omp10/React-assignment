import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  emptyMessage?: string;
  theme?: "light" | "dark";
  onRowSelect?: (selectedRows: T[]) => void;
}

export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  emptyMessage = "No data available",
  theme = "light",
  onRowSelect,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleRowSelect = (row: T, checked: boolean) => {
    const newSelection = checked
      ? [...selectedRows, row]
      : selectedRows.filter(r => r.id !== row.id);
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  const handleSort = (key: keyof T) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
        return 0;
      })
    : data;

  const tableBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const headerBg = theme === "dark" ? "bg-gray-700" : "bg-gray-100";
  const rowHover = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200";

  return (
    <div className={`w-full overflow-x-auto border rounded p-2 ${tableBg}`}>
      {loading ? (
        <div className="p-4 text-center">⏳ Loading...</div>
      ) : sortedData.length === 0 ? (
        <div className="p-4 text-center">{emptyMessage}</div>
      ) : (
        <table className="w-full border-collapse">
          <thead className={headerBg}>
            <tr>
              <th className="px-4 py-2">Select</th>
              {columns.map(col => (
                <th
                  key={String(col.key)}
                  className="px-4 py-2 cursor-pointer select-none"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label} {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map(row => (
              <tr key={row.id} className={rowHover}>
                <td className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.some(r => r.id === row.id)}
                    onChange={e => handleRowSelect(row, e.target.checked)}
                    className="cursor-pointer"
                  />
                </td>
                {columns.map(col => (
                  <td key={String(col.key)} className="px-4 py-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
