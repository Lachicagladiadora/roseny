import React from "react";

export const Menu = () => {
  return (
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
  );
};
