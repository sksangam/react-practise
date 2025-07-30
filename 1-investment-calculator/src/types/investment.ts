export type UserInputProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  durationInYears: number;
};

export type AnnualData = {
  year: number;
  presentValue: string;
  interest: string;
  totalInterest: string;
  investedCapital: string;
};

export type FormFieldProps = {
  id: string;
  label: string;
  type?: "number" | "text";
  value: number;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
