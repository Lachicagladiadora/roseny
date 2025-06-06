import React from "react";
import { MailIcon } from "./icons/MailIcon";

export const Header = () => {
  return (
    <header className="w-full max-w-[1000px] mx-auto px-8 py-4 flex items-center justify-between relative text-blank-light">
      <a
        href="mailto:dev.roseny@gmail.com"
        className="flex gap-3 items-center hover:text-second-light"
      >
        <MailIcon className="size-[24px]" /> dev.roseny@gmail.com
      </a>
    </header>
  );
};
