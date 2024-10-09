import React, { useState } from "react";
import { Hamburger } from "./icons/Hamburger";
import { Close } from "./icons/Close";
// import { Hamburger } from "./icons/Hamburger";
// import { Icon } from 'astro-icon/components'

// const [isOpen, setIsOpen] = useState(false);

export const MenuHamburger = () => {
  return (
    <button
      className="h-10 w-20 bg-white text-red-600"
      // onClick={() => setIsOpen((prev) => !prev)}
    >
      <Hamburger />
      <Close />
      {/* < {isOpen ? Hamburger: Close}/> */}
      {/* {isOpen && <Hamburger />} {!isOpen && <Close />} */}
    </button>
  );
};
