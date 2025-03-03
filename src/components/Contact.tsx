import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <a href="https://github.com/Lachicagladiadora" className="size-8">
        email
      </a>
      <div className="flex gap-12">
        <div className="flex flex-col items-center justify-center gap-1">
          <a href="https://github.com/Lachicagladiadora" className="size-8">
            <LinkedinIcon />
          </a>
          Linkedin
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <a href="https://github.com/Lachicagladiadora" className="size-8">
            <GithubIcon />
          </a>
          GitHub
        </div>
      </div>
    </section>
  );
};
