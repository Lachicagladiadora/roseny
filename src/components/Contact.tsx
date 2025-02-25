import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Contact = () => {
  return (
    <section className="max-w-[600px] font-alegreya flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20 font-thin text-lg">
      <p className="text-[#fff]">
        I'd love to hear from you! If you enjoy my explanations and have
        suggestions for topics we haven't covered yet, feel free to reach out to
        me through any of the options below. Whether you want to connect because
        you liked my code or have questions, I'm here to share my knowledge!
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/Lachicagladiadora" className="size-8">
          <MailIcon />
        </a>
        <a href="https://github.com/Lachicagladiadora" className="size-8">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/Lachicagladiadora" className="size-8">
          <GithubIcon />
        </a>
      </div>
    </section>
  );
};
