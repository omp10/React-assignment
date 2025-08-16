import React from "react";
import InputField from "./InputField";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    loading: { control: "boolean" },
    variant: { control: { type: "select", options: ["filled", "outlined", "ghost"] } },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
    showClear: { control: "boolean" },
    passwordToggle: { control: "boolean" },
    theme: { control: { type: "select", options: ["light", "dark"] } },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

// Default Input
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "Helper text here",
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};

// Error State
export const ErrorState: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    errorMessage: "Invalid input!",
    invalid: true,
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Can't edit",
    disabled: true,
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};

// Loading State
export const Loading: Story = {
  args: {
    label: "Username",
    placeholder: "Loading...",
    loading: true,
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};

// Password Toggle
export const PasswordField: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    passwordToggle: true,
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};
