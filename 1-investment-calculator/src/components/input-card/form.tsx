import type { UserInputProps } from "../calculator";
import FormField from "./form-field";
import type { FC } from "react";

type FormComponentProps = {
  userInput: UserInputProps;
  onChange: (inputIdentifier: keyof UserInputProps, newValue: number) => void;
};

const FormComponent: FC<FormComponentProps> = ({ userInput, onChange }) => {
  return (
    <form className="w-full bg-green-700 border border-green-800 rounded-lg p-4">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <FormField
            id="init-inv"
            label="Initial Investment"
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", +e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <FormField
            id="annual-inv"
            label="Annual Investment"
            value={userInput.annualInvestment}
            type="number"
            onChange={(event) =>
              onChange("annualInvestment", +event.target.value)
            }
          />
        </div>

        <div className="sm:col-span-3">
          <FormField
            id="exp-return"
            label="Expected Return"
            value={userInput.expectedReturn}
            type="number"
            onChange={(event) =>
              onChange("expectedReturn", +event.target.value)
            }
          />
        </div>

        <div className="sm:col-span-3">
          <FormField
            id="duration"
            label="Duration (in Years)"
            value={userInput.durationInYears}
            type="number"
            onChange={(event) =>
              onChange("durationInYears", +event.target.value)
            }
          />
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
