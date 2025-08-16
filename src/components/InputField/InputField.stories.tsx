import InputField from "./InputField";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
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
    variant: {
      control: { type: "select", options: ["filled", "outlined", "ghost"] },
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    showClear: { control: "boolean" },
    passwordToggle: { control: "boolean" },
    theme: {
      control: { type: "select", options: ["light", "dark"] },
    },
  },
} satisfies Meta<typeof InputField>;

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
    placeholder: "Can&apos;t edit", // escaped apostrophe
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

// Clear Button
export const WithClear: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    showClear: true,
    variant: "outlined",
    size: "md",
    theme: "light",
  },
};
