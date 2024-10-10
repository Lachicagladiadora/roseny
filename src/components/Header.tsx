import React, { useEffect, useState } from "react";
// import { MenuHamburger } from "./MenuHamburger";
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";
import { Close } from "./icons/Close";
import { Hamburger } from "./icons/Hamburger";
import { MenuHamburger } from "./MenuHamburger";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log({ isOpenMenu, isDarkTheme });
  useEffect(() => {
    const bodyElement = document.querySelector("#body-element");
    if (!bodyElement) return;
    if (isDarkTheme) {
      bodyElement.classList.add("dark");
    }
    bodyElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="w-full flex items-center justify-center py-6 border-b-2 border-b-black dark:border-b-white">
      <header className="w-full max-w-[800px] flex items-center justify-between">
        <button
          className="h-8 w-8 text-3xl p-[1px] text-black dark:text-zinc-50"
          onClick={() => setIsOpenMenu((p) => !p)}
        >
          {isOpenMenu ? <Close /> : <Hamburger />}
        </button>
        <h1 className="flex-1 text-center">Blogüi</h1>
        <button
          className={`h-8 w-8 text-3xl p-[1px] rounded-full text-black dark:text-zinc-50 ${
            isDarkTheme
              ? "hover:bg-blue-950 hover:text-sky-300"
              : "hover:bg-yellow-950 hover:text-yellow-300"
          }`}
          onClick={() => setIsDarkTheme((p) => !p)}
        >
          {isDarkTheme ? <Moon /> : <Sun />}
        </button>
      </header>
    </div>
  );
};
