import React, { useState } from "react";

import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-center py-2 bg-blank-light dark:bg-obscure-dark md:py-4">
        <header className="w-full max-w-[900px] px-4 flex items-center justify-between relative">
          <div className="w-full">
            <ul className="w-full flex items-center gap-6">
              <li>
                <a
                  href="/"
                  className="font-bold hover:text-obscure-light dark:hover:text-blank-dark"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="font-bold hover:text-obscure-light dark:hover:text-blank-dark"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="font-bold hover:text-obscure-light dark:hover:text-blank-dark"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-bold hover:text-obscure-light dark:hover:text-blank-dark"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
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
    </>
  );
};
