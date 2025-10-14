import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center">
      <a
        href="mailto:contact@roseny.dev"
        target="_blank"
        className="flex flex-col items-center justify-center gap-1  hover:text-second-dark"
      >
        <MailIcon className="size-8" />
        email
      </a>
      <div className="flex gap-16">
        <a
          href="https://www.linkedin.com/in/dev-roseny-quintanilla/"
          target="_blank"
          className="flex flex-col items-center justify-center gap-1  hover:text-second-dark"
        >
          <LinkedinIcon className="size-8" />
          Linkedin
        </a>
        <a
          href="https://github.com/Lachicagladiadora"
          target="_blank"
          className="flex flex-col items-center justify-center gap-1  hover:text-second-dark"
        >
          <GithubIcon className="size-8" />
          GitHub
        </a>
      </div>
    </section>
  );
};
