import React, { useEffect, useState } from "react";
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";
import { Close } from "./icons/Close";
import { Hamburger } from "./icons/Hamburger";
import { Menu } from "./Menu";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log({ isOpenMenu, isDarkTheme });
  useEffect(() => {
    const bodyElement = document.querySelector("#body-element");
    if (!bodyElement) return;
    bodyElement.classList.toggle("dark");
  }, [isDarkTheme]);

  return (
    <>
      <div className="w-full flex items-center justify-center py-6 border-b-2 border-b-black dark:border-b-white">
        <header className="w-full max-w-[900px] px-4 flex items-center justify-between relative">
          <button
            className="h-8 w-8 text-3xl p-[1px] text-black dark:text-zinc-50"
            onClick={() => setIsOpenMenu((p) => !p)}
          >
            {isOpenMenu ? <Close /> : <Hamburger />}
          </button>
          <h1 className="flex-1 text-center text-3xl">Blogüi</h1>
          <button
            className={`h-8 w-8 text-3xl p-[1px] rounded-full md:text-black md:dark:text-zinc-50 transition ${
              isDarkTheme
                ? "text-sky-300 hover:bg-blue-950 hover:text-sky-300"
                : "text-yellow-500 hover:bg-yellow-50 hover:text-yellow-500"
            }`}
            onClick={() => setIsDarkTheme((p) => !p)}
          >
            {isDarkTheme ? <Moon /> : <Sun />}
          </button>
        </header>
      </div>
      <div className="w-full h-0 flex items-center justify-center">
        <div className="w-full max-w-[900px] flex items-center justify-center relative">
          {isOpenMenu && (
            <div className="w-[100vw] h-[100vh] absolute top-[0px] left-0  md:top-[0px] md:w-96 md:h-[600px] drop-shadow-md">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
