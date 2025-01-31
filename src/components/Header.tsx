import React, { useEffect, useState } from "react";

import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";
import { Menu } from "./Menu";

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const updatedTheme = () => {
    const theme = localStorage.getItem("theme");
    setIsDarkTheme(Boolean(theme));
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const theme = localStorage.getItem("theme");

    setIsDarkTheme(Boolean(theme));
    htmlElement?.classList.toggle("dark");
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center py-2 bg-blank-light dark:bg-obscure-dark md:py-4">
        <header className="w-full max-w-[900px] px-4 flex items-center justify-between relative">
          <Menu />
          <button
            className="h-[36px] w-[36px] text-xl md:text-2xl lg:3xl p-[2px] rounded-full flex items-center justify-center transition text-obscure hover:bg-first-light hover:text-blank-light dark:text-second-dark dark:hover:bg-blank dark:hover:text-obscure-light"
            onClick={() => {
              const bodyElement = document.querySelector("html");
              if (!bodyElement) return;
              bodyElement.classList.toggle("dark");
              setIsDarkTheme((p) => {
                localStorage.setItem("theme", `${!p}`);
                return !p;
              });
              updatedTheme();
            }}
          >
            {isDarkTheme ? <Sun /> : <Moon />}
          </button>
        </header>
      </div>
    </>
  );
};
