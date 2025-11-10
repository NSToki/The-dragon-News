import React from 'react';
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const today = new Date();
  const dayName = format(today, "EEEE");
  const datePart = format(today, "MMMM dd, yyyy");

  return (
    <header className="w-full flex flex-col justify-center items-center text-center py-6 bg-white">
      <img 
        src={logo} 
        alt="Logo" 
        className="h-[60px] w-[450px] mb-3" 
      />
      
      <p className="text-[#706F6F] text-base font-[Poppins]">
        Journalism Without Fear or Favour
      </p>

      <p className="mt-2 font-[Poppins]">
        <span className="text-black font-semibold">{dayName}</span>
        <span className="text-[#706F6F]">, {datePart}</span>
      </p>
    </header>
  );
};

export default Header;
