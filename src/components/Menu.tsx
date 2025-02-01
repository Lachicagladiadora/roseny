import React from "react";
import type { Page } from "./Header";
import { navigate } from "astro:transitions/client";

type MenuProps = { currentPage: Page; fnChangePage: (_p: Page) => void };

export const Menu = ({ currentPage, fnChangePage }: MenuProps) => {
  return (
    <div className="w-full">
      <ul className="w-full flex items-center gap-8">
        <li
          className={`hover:font-bold hover:text-obscure-light dark:hover:text-blank-dark
              ${currentPage === "Home" ? "font-bold" : ""}
              `}
          onClick={() => {
            fnChangePage("Home");
            localStorage.setItem("page", "Home");
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className={`hover:font-bold hover:text-obscure-light dark:hover:text-blank-dark
              ${currentPage === "Portfolio" ? "font-bold" : ""}
              `}
          onClick={() => {
            fnChangePage("Portfolio");
            localStorage.setItem("page", "Portfolio");
            navigate("/portfolio");
          }}
        >
          Portfolio
        </li>
        <li
          className={`hover:font-bold hover:text-obscure-light dark:hover:text-blank-dark
              ${currentPage === "Blog" ? "font-bold" : ""}
              `}
          onClick={() => {
            fnChangePage("Blog");
            localStorage.setItem("page", "Blog");
            navigate("/blog");
          }}
        >
          Blog
        </li>
        <li
          className={`hover:font-bold hover:text-obscure-light dark:hover:text-blank-dark
              ${currentPage === "Contact" ? "font-bold" : ""}
              `}
          onClick={() => {
            fnChangePage("Contact");
            localStorage.setItem("page", "Contact");
            navigate("/contact");
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};
