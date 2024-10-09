import React, { useState } from "react";
import { Hamburger } from "./icons/Hamburger";
import { Close } from "./icons/Close";

export const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="h-10 w-20 bg-white text-red-600"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {!isOpen ? <Hamburger /> : <Close />}
    </button>
  );
};
