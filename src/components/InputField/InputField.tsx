import React, { useState } from "react";

interface InputFieldProps {
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  invalid?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  passwordToggle?: boolean;
  theme?: "light" | "dark";
  showClear?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onClear,
  label,
  placeholder,
  helperText,
  errorMessage,
  invalid,
  disabled,
  loading = false,
  variant = "outlined",
  size = "md",
  passwordToggle = false,
  showClear = false,
  theme = "light",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const variantClasses =
    variant === "outlined"
      ? "border"
      : variant === "filled"
      ? "bg-gray-100 border"
      : "border-0 bg-transparent";

  const sizeClasses =
    size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-4 py-3 text-lg" : "px-3 py-2 text-base";

  return (
    <div className={`flex flex-col gap-1 w-full ${theme === "dark" ? "text-white" : "text-black"}`}>
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative flex items-center">
        <input
          type={passwordToggle && !showPassword ? "password" : "text"}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`w-full rounded ${variantClasses} ${sizeClasses} ${
            invalid ? "border-red-500" : "border-gray-300"
          } ${loading ? "bg-gray-100 animate-pulse" : ""} ${
            disabled ? "cursor-not-allowed bg-gray-200" : "cursor-text"
          }`}
        />

        {/* Cross sign inside input */}
        {showClear && onClear && value && (
          <button
            type="button"
            onClick={onClear}
            disabled={disabled}
            className={`absolute right-2 ${
              disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-gray-500 hover:text-black"
            }`}
          >
            ✕
          </button>
        )}

        {/* Password Toggle */}
        {passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            disabled={disabled}
            className={`absolute right-${showClear ? "8" : "2"} ${
              disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-gray-500 hover:text-black"
            }`}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}

        {/* Loading Indicator */}
        {loading && (
          <span className="absolute right-10 text-gray-500 animate-spin">⏳</span>
        )}
      </div>

      {helperText && !errorMessage && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
