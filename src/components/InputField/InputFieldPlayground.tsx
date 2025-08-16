import { useState } from "react";
import InputField from "./InputField";

interface InputFieldPlaygroundProps {
  theme?: "light" | "dark"; // only for styling
}

const InputFieldPlayground: React.FC<InputFieldPlaygroundProps> = ({ theme = "light" }) => {
  const [label, setLabel] = useState(true);
  const [placeholder, setPlaceholder] = useState(true);
  const [helperText, setHelperText] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState<"filled" | "outlined" | "ghost">("outlined");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [showClear, setShowClear] = useState(true);
  const [passwordToggle, setPasswordToggle] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Live Input Field */}
      <InputField
        label={label ? "Username" : undefined}
        placeholder={placeholder ? "Enter your username" : undefined}
        helperText={helperText ? "Helper text here" : undefined}
        errorMessage={errorMessage ? "Invalid input!" : undefined}
        invalid={errorMessage ? true : invalid} // Show error when errorMessage is true
        disabled={disabled}
        loading={loading}
        variant={variant}
        size={size}
        showClear={showClear}
        passwordToggle={passwordToggle}
        theme={theme}
      />

      {/* Feature Buttons */}
      <div className="flex flex-wrap gap-2 mt-2">
        <button onClick={() => setLabel(!label)} className="px-2 py-1 bg-blue-500 text-white rounded">Label</button>
        <button onClick={() => setPlaceholder(!placeholder)} className="px-2 py-1 bg-blue-500 text-white rounded">Placeholder</button>
        <button onClick={() => setHelperText(!helperText)} className="px-2 py-1 bg-blue-500 text-white rounded">Helper Text</button>
        <button
          onClick={() => setErrorMessage(!errorMessage)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Error Message
        </button>
        <button onClick={() => setDisabled(!disabled)} className="px-2 py-1 bg-gray-500 text-white rounded">Disabled</button>
        <button onClick={() => setInvalid(!invalid)} className="px-2 py-1 bg-red-400 text-white rounded">Invalid</button>
        <button onClick={() => setLoading(!loading)} className="px-2 py-1 bg-yellow-500 text-white rounded">Loading</button>
        <button onClick={() => setShowClear(!showClear)} className="px-2 py-1 bg-purple-500 text-white rounded">Clear Button</button>
        <button onClick={() => setPasswordToggle(!passwordToggle)} className="px-2 py-1 bg-indigo-500 text-white rounded">Password Toggle</button>

        <select value={variant} onChange={e => setVariant(e.target.value as any)} className="px-2 py-1 border rounded">
          <option value="outlined">Outlined</option>
          <option value="filled">Filled</option>
          <option value="ghost">Ghost</option>
        </select>

        <select value={size} onChange={e => setSize(e.target.value as any)} className="px-2 py-1 border rounded">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
    </div>
  );
};

export default InputFieldPlayground;
