import { useState, type ChangeEventHandler } from "react";

type Props = {
  id: string | number;
  label?: string;
  defaultChecked?: boolean;
  onChange: () => void;
};

export const Checkbox = ({
  id,
  label,
  onChange,
  defaultChecked = false,
}: Props) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked((value) => !value);
    onChange();
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        data-testid={id}
        checked={checked}
        onChange={handleChange}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
