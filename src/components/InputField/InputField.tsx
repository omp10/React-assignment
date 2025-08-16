// components/InputField/InputField.tsx
import React, { useState } from 'react';

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showClear?: boolean;
  passwordToggle?: boolean;
  theme?: 'light' | 'dark';
}

const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = 'outlined',
  size = 'md',
  showClear = false,
  passwordToggle = false,
  theme = 'light',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const baseClasses = `w-full border rounded px-3 focus:outline-none transition-all`;
  const sizeClasses =
    size === 'sm' ? 'py-1 text-sm' :
    size === 'lg' ? 'py-3 text-lg' : 'py-2 text-md';

  const variantClasses = variant === 'filled'
    ? 'bg-gray-100 border-gray-300'
    : variant === 'ghost'
      ? 'bg-transparent border-transparent'
      : 'bg-white border-gray-300';

  const stateClasses = `
    ${invalid ? 'border-red-500' : ''}
    ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}
  `;

  const themeClasses = theme === 'dark'
    ? 'text-white bg-gray-800 border-gray-700 placeholder-gray-400'
    : '';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium">{label}</label>}
      <div className="relative flex items-center w-full">
        <input
          type={passwordToggle && !showPassword ? 'password' : 'text'}
          value={onChange ? value : internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`${baseClasses} ${sizeClasses} ${variantClasses} ${stateClasses} ${themeClasses}`}
        />
        {showClear && (onChange ? value : internalValue) && !disabled && !loading && (
          <button
            type="button"
            onClick={() => setInternalValue('')}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
        {passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        {loading && <div className="absolute right-2 animate-spin">⏳</div>}
      </div>
      {helperText && !invalid && <p className="text-gray-500 text-sm">{helperText}</p>}
      {invalid && errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
