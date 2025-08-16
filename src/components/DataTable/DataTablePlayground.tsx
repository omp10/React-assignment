"use client";
import { useState } from "react";
import { DataTable, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

interface DataTablePlaygroundProps {
  theme?: "light" | "dark";
}

const DataTablePlayground: React.FC<DataTablePlaygroundProps> = ({ theme = "light" }) => {
  const [data, setData] = useState<User[]>([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ]);
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState<string>("");
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

    const newUser: User = {
      id: nextId,
      name: newName.trim(),
      age: Number(newAge),
    };

    setData(prev => [...prev, newUser]);
    setNewName("");
    setNewAge("");
  };

  const deleteSelectedUsers = () => {
    setData(prev =>
      prev.filter(row => !selectedRows.some(sel => sel.id === row.id))
    );
    setSelectedRows([]);
  };

  const sortColumn = (key: keyof User) => {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return aVal - bVal;
      }
      return String(aVal).localeCompare(String(bVal));
    });
    setData(sorted);
  };

  return (
    <div
      className={`flex flex-col gap-4 w-full p-4 rounded-xl shadow-md transition-colors ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Action Buttons above table */}
      <div className="flex flex-wrap gap-2 mb-2 items-center">
        {columns.map(col => (
          <button
            key={col.key}
            onClick={() => sortColumn(col.key)}
            className="px-2 py-1 bg-blue-500 text-white rounded-xl cursor-pointer hover:bg-blue-600 transition"
          >
            Sort {col.label}
          </button>
        ))}

        <button
          onClick={() => setLoading(prev => !prev)}
          className="px-2 py-1 bg-yellow-500 text-white rounded-xl cursor-pointer hover:bg-yellow-600 transition"
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewName(e.target.value)
          }
          className="px-2 py-1 border rounded w-32 text-black"
        />
        <input
          type="number"
          placeholder="Age"
          value={newAge}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewAge(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="px-2 py-1 border rounded w-20 text-black"
        />
        <button
          onClick={addUser}
          className="px-2 py-1 bg-green-500 text-white rounded-xl cursor-pointer hover:bg-green-600 transition"
        >
          Add User
        </button>
        <button
          onClick={deleteSelectedUsers}
          className="px-2 py-1 bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-600 transition"
        >
          Delete Selected Users
        </button>
      </div>
    </div>
  );
};

export default DataTablePlayground;
