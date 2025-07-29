import type { UserInputProps } from "@/components/calculator";
import { rupeeFormatter } from "./formatter";

export type AnnualData = {
  year: number;
  presentValue: string;
  interest: string;
  totalInterest: string;
  investedCapital: string;
};

export const calculationResult = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  durationInYears,
}: UserInputProps): AnnualData[] => {
  const annualData: AnnualData[] = [];

  let presentValue = initialInvestment;
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  for (let i = 1; i <= durationInYears; i++) {
    const interest = (presentValue * expectedReturn) / 100;
    totalInterest += interest;
    investedCapital += annualInvestment;
    presentValue += annualInvestment + interest;

    annualData.push({
      year: i,
      presentValue: rupeeFormatter(Math.round(presentValue)),
      interest: rupeeFormatter(Math.round(interest)),
      totalInterest: rupeeFormatter(Math.round(totalInterest)),
      investedCapital: rupeeFormatter(Math.round(investedCapital)),
    });
  }

  return annualData;
};
