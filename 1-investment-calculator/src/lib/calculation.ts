import type { AnnualData, UserInputProps } from "@/types/investment";
import { rupeeFormatter } from "./formatter";

export const calculationResult = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  durationInYears,
}: UserInputProps): AnnualData[] => {
  const annualData: AnnualData[] = [];
  const returnRate = expectedReturn / 100;

  let presentValue = initialInvestment;
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  for (let i = 1; i <= durationInYears; i++) {
    const interest = presentValue * returnRate;
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
