import type { UserInputProps } from "@/types/investment";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateInputs = (userInput: UserInputProps): boolean => {
  return (
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn > 0 &&
    userInput.durationInYears > 0
  );
};
