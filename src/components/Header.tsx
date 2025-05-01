import { useEffect, useState } from "react";
import { BlogIcon } from "./icons/BlogIcon";
import { MailIcon } from "./icons/MailIcon";
import { HomeIcon } from "./icons/HomeIcon";

export const Header = () => {
  const [isInBlog, setIsInBlog] = useState<"wait" | "blog" | "home">("home");

  useEffect(() => {
    setIsInBlog("wait");
    const page = window.localStorage.getItem("currentPage");
    if (!page) return;
    setIsInBlog(JSON.parse(page));
  }, []);

  return (
    <header className="w-full max-w-[1000px] mx-auto px-8 py-4 flex items-center justify-between relative text-blank-light">
      <a
        href="mailto:dev.roseny@gmail.com"
        className="flex gap-3 items-center hover:text-second-light"
      >
        <MailIcon className="size-[24px]" /> dev.roseny@gmail.com
      </a>
      {isInBlog !== "wait" && isInBlog === "home" && (
        <a
          href="/blog"
          className="flex gap-3 items-center hover:text-second"
          onClick={() => {
            window.localStorage.setItem("currentPage", JSON.stringify("blog"));
            setIsInBlog("blog");
          }}
        >
          <BlogIcon className="size-[26px]" />{" "}
          <span className="md:inline hidden">Blog</span>
        </a>
      )}
      {isInBlog !== "wait" && isInBlog === "blog" && (
        <a
          href="/"
          className="flex gap-3 items-center hover:text-second"
          onClick={() => {
            window.localStorage.setItem("currentPage", JSON.stringify("home"));
            setIsInBlog("home");
          }}
        >
          <HomeIcon className="size-6 inline md:hidden" />
          <span className="md:inline hidden">Home</span>
        </a>
      )}
    </header>
  );
};
