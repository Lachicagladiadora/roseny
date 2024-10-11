import React from "react";

export const Menu = () => {
  return (
    <div
      className="h-full w-full py-2 px-1 border-0  border-black text-black bg-zinc-50 
      dark:border-zinc-50 dark:text-zinc-50 dark:bg-black 
        md:rounded-b-2xl md:border-[2px] md:border-t-0
      "
    >
      <h3 className="py-6 text-lg font-bold text-center">Menu</h3>
      <ul className="flex flex-col justify-center">
        <li className="py-4 px-2 text-center border-t-2 border-b-2 last:border-b-0 border-black dark:border-zinc-50">
          <a href="/">Home</a>
        </li>
        <li className="py-4 px-2 text-center border-b-2 last:border-b-0 border-black dark:border-zinc-50">
          <a href="/about">About</a>
        </li>
        <li className="py-4 px-2 text-center border-b-2 last:border-b-0 border-black dark:border-zinc-50">
          <a href="/blog">Blog</a>
        </li>
        <li className="py-4 px-2 text-center border-b-2 last:border-b-0 border-black dark:border-zinc-50">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
