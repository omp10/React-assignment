import React, { useState } from "react";
import { DataTable, Column } from "./DataTable";
import { Meta, StoryObj } from "@storybook/react";

interface User {
  id: number;
  name: string;
  age: number;
}

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const columns: Column<User>[] = [
  { key: "id", label: "User ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
];

// Default Table
export const Default: Story = {
  render: () => {
    const [data, setData] = useState<User[]>(sampleData);
    const [selectedRows, setSelectedRows] = useState<User[]>([]);

    const addUser = () => {
      const nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
      setData([...data, { id: nextId, name: `User ${nextId}`, age: 20 }]);
    };

    const deleteSelected = () => {
      setData(data.filter(d => !selectedRows.includes(d)));
      setSelectedRows([]);
    };

    return (
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer"
            onClick={addUser}
          >
            Add User
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
            onClick={deleteSelected}
            disabled={selectedRows.length === 0}
          >
            Delete Selected
          </button>
        </div>
        <DataTable
          data={data}
          columns={columns}
          selectable
          onRowSelect={setSelectedRows}
          loading={false}
        />
      </div>
    );
  },
};

// Loading State
export const Loading: Story = {
  render: () => <DataTable data={[]} columns={columns} loading />,
};

// Empty State
export const Empty: Story = {
  render: () => <DataTable data={[]} columns={columns} emptyMessage="No users found!" />,
};
