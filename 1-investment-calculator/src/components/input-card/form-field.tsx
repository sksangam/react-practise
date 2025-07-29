import type React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className="bg-white text-black placeholder:text-gray-500 rounded-sm"
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
