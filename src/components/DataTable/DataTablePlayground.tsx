"use client";
import { useState } from "react";
import { DataTable, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const DataTablePlayground: React.FC = () => {
  const [data, setData] = useState<User[]>([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ]);
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState<number | "">("");
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const columns: Column<User>[] = [
    { key: "id", label: "User ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const addUser = () => {
    if (!newName || newAge === "") return;
    const nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
    setData([...data, { id: nextId, name: newName, age: Number(newAge) }]);
    setNewName("");
    setNewAge("");
  };

  const deleteSelectedUsers = () => {
    setData(prev => prev.filter(row => !selectedRows.some(sel => sel.id === row.id)));
    setSelectedRows([]);
  };

 const sortColumn = (key: keyof User) => {
  const sorted = [...data].sort((a, b) => {
    if (key === "id") {
      return a.id - b.id; // always ascending for User ID
    }
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
  setData(sorted);
};


  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Action Buttons above table */}
      <div className="flex flex-wrap gap-2 mb-2 items-center">
        {columns.map(col => (
          <button
            key={col.key}
            onClick={() => sortColumn(col.key as keyof User)}
            className="px-2 py-1 bg-blue-500 text-white rounded-xl cursor-pointer"
          >
            Sort {col.label}
          </button>
        ))}

        <button
          onClick={() => setLoading(!loading)}
          className="px-2 py-1 bg-yellow-500 text-white rounded-xl cursor-pointer"
        >
          Toggle Loading
        </button>
      </div>

      {/* Data Table */}
      <DataTable
        data={data}
        columns={columns}
        selectable
        loading={loading}
        onRowSelect={setSelectedRows}
      />

      {/* Add User and Delete Selected Users Below Table */}
      <div className="flex flex-wrap gap-2 mt-2 items-center">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={newAge}
          onChange={e => setNewAge(e.target.value === "" ? "" : Number(e.target.value))}
          className="px-2 py-1 border rounded w-20"
        />
        <button
          onClick={addUser}
          className="px-2 py-1 bg-green-500 text-white rounded-xl cursor-pointer"
        >
          Add User
        </button>
        <button
          onClick={deleteSelectedUsers}
          className="px-2 py-1 bg-red-500 text-white rounded-xl cursor-pointer"
        >
          Delete Selected Users
        </button>
      </div>
    </div>
  );
};

export default DataTablePlayground;
