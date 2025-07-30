import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AnnualData } from "@/types/investment";
import type { FC } from "react";

const Result: FC<{ results: AnnualData[]; inputValid: boolean }> = ({
  results,
  inputValid,
}) => {
  return (
    <div className="border w-full">
      {inputValid ? (
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
      ) : (
        <div className="text-red-500 mt-2">
          Please check your input. All fields must be positive numbers (annual
          investment can be zero).
        </div>
      )}
    </div>
  );
};

export default Result;
