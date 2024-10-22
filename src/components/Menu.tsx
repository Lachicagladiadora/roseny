import React from "react";

export const Menu = () => {
  return (
    <div
      className="w-full py-2 px-1 border-0  border-obscure-dark text-obscure-dark bg-second-light 
      dark:border-blank-light dark:text-blank-light dark:bg-obscure-light 
        md:rounded-b-2xl md:border-[2px] md:border-t-0
      "
    >
      <h3 className="py-6 text-lg font-bold text-center">Menu</h3>
      <ul className="flex flex-col justify-center">
        <li
          className="py-4 px-2 text-center border-t-4 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
        >
          <a href="/">Home</a>
        </li>
        <li
          className="py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
        >
          <a href="/about">About</a>
        </li>
        <li
          className="py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
        >
          <a href="/tags">Tags</a>
        </li>
        <li
          className="py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
        >
          <a href="/blog">Blog</a>
        </li>
        <li
          className="py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 last:rounded-b-xl border-second 
        hover:bg-first/80 hover:text-blank-light
        dark:border-first dark:hover:bg-blank dark:hover:text-obscure-dark dark:hover:border-second"
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
