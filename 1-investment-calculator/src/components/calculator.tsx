import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./header/header";
import FormComponent from "./input-card/form";
import Result from "./input-card/result";
import type { AnnualData, UserInputProps } from "@/types/investment";
import { validateInputs } from "@/lib/utils";
import { calculationResult } from "@/lib/calculation";
import { DEFAULT_USER_INPUT } from "@/lib/constants";

const Calculator = () => {
  const [userInput, setUserInput] =
    useState<UserInputProps>(DEFAULT_USER_INPUT);
  const [inputValid, setInputValid] = useState(true);

  useEffect(() => {
    setInputValid(validateInputs(userInput));
  }, [userInput]);

  const handleChange = useCallback(
    (inputIdentifier: keyof UserInputProps, newValue: number) => {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputIdentifier]: newValue,
        };
      });
    },
    []
  );

  const results: AnnualData[] = useMemo(
    () => (inputValid ? calculationResult(userInput) : []),
    [inputValid, userInput]
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4">
      <div className="w-full max-w-xl flex flex-col items-center gap-10">
        <Header />
        <FormComponent userInput={userInput} onChange={handleChange} />
        <Result results={results} inputValid={inputValid} />
      </div>
    </div>
  );
};

export default Calculator;
