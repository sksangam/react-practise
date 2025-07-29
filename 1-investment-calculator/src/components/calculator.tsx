import { useState } from "react";
import Header from "./header/header";
import FormComponent from "./input-card/form";
import Result from "./input-card/result";

export type UserInputProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  durationInYears: number;
};

const Calculator = () => {
  const [userInput, setUserInput] = useState<UserInputProps>({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 12,
    durationInYears: 10,
  });

  const handleChange = (
    inputIdentifier: keyof UserInputProps,
    newValue: number
  ) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4">
      <div className="w-full max-w-xl flex flex-col items-center gap-10">
        <Header />
        <FormComponent userInput={userInput} onChange={handleChange} />
        <Result userInput={userInput} />
      </div>
    </div>
  );
};

export default Calculator;
