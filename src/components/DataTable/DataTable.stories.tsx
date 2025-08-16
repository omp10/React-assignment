import React from "react";
import { Meta, Story } from "@storybook/react";
import DataTable from "./DataTable";
import { DataTableProps, Column } from "./DataTable.types";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "id", title: "ID", sortable: true },
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email" },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default {
  title: "Components/DataTable",
  component: DataTable,
} as Meta;

const Template: Story<DataTableProps<User>> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = { data, columns };

export const Selectable = Template.bind({});
Selectable.args = { data, columns, selectable: true };
