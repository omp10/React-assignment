import { useState } from "react";
import InputField from "./InputField";

interface InputFieldPlaygroundProps {
  theme?: "light" | "dark"; // Accept theme prop
}

const InputFieldPlayground: React.FC<InputFieldPlaygroundProps> = ({ theme = "light" }) => {
  const [value, setValue] = useState<string | null>(""); 
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

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue(null)}
        label={label ? "Username" : undefined}
        placeholder={placeholder ? "Enter username" : undefined}
        helperText={helperText ? "Helper text here" : undefined}
        errorMessage={errorMessage ? "Invalid input!" : undefined}
        invalid={errorMessage ? true : invalid}
        disabled={disabled}
        loading={loading}
        variant={variant}
        size={size}
        showClear={showClear}
        passwordToggle={passwordToggle}
        theme={theme} // Pass theme prop down
      />

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mt-2">
        <button onClick={toggle(setLabel)} className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer">
          Label
        </button>
        <button onClick={toggle(setPlaceholder)} className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer">
          Placeholder
        </button>
        <button onClick={toggle(setHelperText)} className="px-2 py-1 bg-blue-500 text-white rounded cursor-pointer">
          Helper Text
        </button>
        <button onClick={toggle(setErrorMessage)} className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer">
          Error Message
        </button>
        <button onClick={toggle(setDisabled)} className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer">
          Disabled
        </button>
        <button onClick={toggle(setInvalid)} className="px-2 py-1 bg-red-400 text-white rounded cursor-pointer">
          Invalid
        </button>
        <button onClick={toggle(setLoading)} className="px-2 py-1 bg-yellow-500 text-white rounded cursor-pointer">
          Loading
        </button>
        <button onClick={toggle(setShowClear)} className="px-2 py-1 bg-purple-500 text-white rounded cursor-pointer">
          Cross Sign
        </button>
        <button onClick={toggle(setPasswordToggle)} className="px-2 py-1 bg-indigo-500 text-white rounded cursor-pointer">
          Password Toggle
        </button>

        <select
          value={variant}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setVariant(e.target.value as "outlined" | "filled" | "ghost")
          }
          className="px-2 py-1 border rounded cursor-pointer"
        >
          <option value="outlined">Outlined</option>
          <option value="filled">Filled</option>
          <option value="ghost">Ghost</option>
        </select>

        <select
          value={size}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSize(e.target.value as "sm" | "md" | "lg")
          }
          className="px-2 py-1 border rounded cursor-pointer"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
    </div>
  );
};

export default InputFieldPlayground;
