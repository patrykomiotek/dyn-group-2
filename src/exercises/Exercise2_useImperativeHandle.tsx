import { forwardRef, useImperativeHandle, useRef, useState } from "react";

// TODO: Define the interface for form field handle
export interface FormFieldHandle {
  // Add methods that parent components should be able to call
  focus: () => void;
  clear: () => void;
  validate: () => boolean;
  getValue: () => string;
  setValue: (value: string) => void;
}

interface FormFieldProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  onValidationChange?: (isValid: boolean) => void;
}

const FormField = forwardRef<FormFieldHandle, FormFieldProps>(
  ({ label, placeholder, required, minLength, onValidationChange }, ref) => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // TODO: Implement useImperativeHandle
    // Expose methods: focus, clear, validate, getValue, setValue
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        console.log("inside clear");
        setValue("");
        setErrorMessage("");
        setIsValid(true);
      },
      validate: () => {
        return true;
      },
      getValue: () => {
        return value;
      },
      setValue: (newValue: string) => {
        setValue(newValue);
      },
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      // TODO: Add validation logic
      // Check required, minLength, etc.
    };

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            !isValid ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* TODO: Display error message */}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export function CustomForm() {
  // TODO: Create refs for form fields
  const emailFieldRef = useRef<FormFieldHandle>(null);
  const nameFieldRef = useRef<FormFieldHandle>(null);
  const phoneFieldRef = useRef<FormFieldHandle>(null);
  // TODO: Add form validation and submission logic

  const focusFirstHandler = () => {
    emailFieldRef.current?.focus();
    // emailFieldRef.current?.setValue();
    // emailFieldRef.current?.getValue();
  };

  const clearAllHandler = () => {
    emailFieldRef.current?.clear();

    console.log(emailFieldRef.current);

    nameFieldRef.current?.clear();
    phoneFieldRef.current?.clear();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Custom Form Component</h2>

      <form className="space-y-6">
        {/* TODO: Add form fields with refs */}
        <FormField ref={emailFieldRef} label="E-mail" />
        <FormField ref={nameFieldRef} label="Name" />
        <FormField ref={phoneFieldRef} label="Phone" />

        {/* TODO: Add form controls */}
        <div className="flex gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Validate All
          </button>
          <button
            type="button"
            onClick={clearAllHandler}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={focusFirstHandler}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Focus First
          </button>
        </div>
      </form>
    </div>
  );
}
