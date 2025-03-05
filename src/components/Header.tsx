// import type { ReactNode } from "react";

// type HeaderProps = { children: ReactNode };
export const Header = () =>
  // { children }: HeaderProps
  {
    return (
      <header className="w-full max-w-[1000px] mx-auto px-8 py-4 flex items-center justify-between relative text-blank-light">
        {/* {children} */}
        <a
          href="mailto:dev.roseny@gmail.com"
          className="hover:text-second-dark"
        >
          email
        </a>
      </header>
    );
  };
