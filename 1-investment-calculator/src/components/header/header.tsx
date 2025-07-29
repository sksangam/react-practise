import { BadgeDollarSign } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center">
      <BadgeDollarSign
        size={96}
        color="#078381"
        strokeWidth={3}
        absoluteStrokeWidth
      />
      <p className="text-blue-700 font-bold text-2xl md:text-4xl leading-snug mt-5">
        Investment Calculator
      </p>
    </header>
  );
};

export default Header;
