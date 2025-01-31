import React, { useState } from "react";

import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";
import { Close } from "./icons/Close";
import { Hamburger } from "./icons/Hamburger";
import { Knowbud } from "./icons/Knowbud";

import { Menu } from "./Menu";

import { BLOG_NAME } from "../constants";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-center py-2 bg-blank-light dark:bg-obscure-dark md:py-4">
        <header className="w-full max-w-[900px] px-4 flex items-center justify-between relative">
          <button
            className={`h-6 w-6 text-2xl lg:3xl p-[2px] md:h-8 md:w-8 rounded-full flex items-center justify-center ${
              isOpenMenu
                ? "text-obscure-light dark:text-second-light hover:bg-second dark:hover:bg-first-dark"
                : "text-obscure dark:text-second-dark hover:bg-second dark:hover:bg-first-dark"
            }`}
            onClick={() => setIsOpenMenu((p) => !p)}
          >
            {isOpenMenu ? <Close /> : <Hamburger />}
          </button>
          <a href="/">
            <h1 className="flex-1 flex items-center justify-center gap-4 text-[30px] font-bold text-obscure dark:text-second-dark">
              <Knowbud />
              {BLOG_NAME}
            </h1>
          </a>
          <button
            className="h-[36px] w-[36px] text-xl md:text-2xl lg:3xl p-[2px] rounded-full flex items-center justify-center transition text-obscure hover:bg-first-light hover:text-blank-light dark:text-second-dark dark:hover:bg-blank dark:hover:text-obscure-light"
            onClick={() => {
              const bodyElement = document.querySelector("html");
              if (!bodyElement) return;
              setIsDarkTheme((p) => !p);
              bodyElement.classList.toggle("dark");
            }}
          >
            {isDarkTheme ? <Sun /> : <Moon />}
          </button>
        </header>
      </div>
      <div className="w-full h-0 flex items-center justify-center">
        <div className="w-full max-w-[900px] flex items-center justify-center relative">
          {isOpenMenu && (
            <div className="w-[100vw] h-[100vh] absolute top-[0px] left-0  md:top-[0px] md:w-96 md:h-[600px] drop-shadow-md z-10">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
