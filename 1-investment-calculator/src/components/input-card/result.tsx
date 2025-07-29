import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculationResult, type AnnualData } from "@/lib/calculation";
import type { FC } from "react";
import type { UserInputProps } from "../calculator";

const Result: FC<{ userInput: UserInputProps }> = ({ userInput }) => {
  const {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    durationInYears,
  } = userInput;

  const results: AnnualData[] = calculationResult({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    durationInYears,
  });

  return (
    <div className="border w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Investment Value</TableHead>
            <TableHead>Interest (Year)</TableHead>
            <TableHead>Total Interest</TableHead>
            <TableHead>Invested Capital</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.year}>
              <TableCell>{result.year}</TableCell>
              <TableCell>{result.presentValue}</TableCell>
              <TableCell>{result.interest}</TableCell>
              <TableCell>{result.totalInterest}</TableCell>
              <TableCell>{result.investedCapital}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Result;
