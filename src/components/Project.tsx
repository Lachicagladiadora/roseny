import React from "react";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";
import { GithubIcon } from "./icons/GithubIcon";
import { PuzzlePice } from "./icons/PuzzlePice";

type ProjectsProps = {
  nameProject: string;
  description: string;
  coverImage: string;
  urlGitHub: string;
  urlProject: string;
  collaboration: boolean;
};
export const Project = ({
  nameProject,
  description,
  coverImage,
  urlGitHub,
  urlProject,
  collaboration,
}: ProjectsProps) => {
  return (
    // <section className="max-w-[600px] font-alegreya flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20 font-thin text-lg">
    //     <li
    //       className="h-[400px] w-[290px] p-4 rounded-lg flex flex-col items-center justify-center overflow-hidden shadow-md
    // group/title group/image text-blank-light bg-obscure-light md:h-[520px] md:w-[360px] lg:h-[580px] lg:w-[420px]"
    //     >
    //       <div
    //         className={`relative w-full h-full flex-1 rounded-md grayscale image group-hover/image:grayscale-0 flex overflow-hidden`}
    //       >
    //         <a href={urlProject} target="_blank" className="w-full h-full">
    //           <img
    //             src={coverImage ?? "./icons/Image"}
    //             alt={`${nameProject} screenshot app`}
    //             className="h-full w-full object-cover"
    //           />
    //         </a>
    //         <div className="absolute bottom-0 right-0 flex items-center justify-center gap-2 text-xl bg-blank/15 rounded-ss-2xl p-2 ">
    //           {collaboration && (
    //             <span title="Project collaborative">
    //               <PuzzlePice className="size-6" />
    //             </span>
    //           )}
    //           <a
    //             href={urlProject}
    //             target="_blank"
    //             className="p-1 hover:text-obscure hover:bg-blank rounded-full"
    //             title="Preview in another tab"
    //           >
    //             <ArrowTopRightOnSquare className="size-6" />
    //           </a>
    //           <a
    //             href={urlGitHub}
    //             target="_blank"
    //             className="p-1 hover:text-obscure hover:bg-blank rounded-full"
    //             title="Go to the project repository"
    //           >
    //             <GithubIcon className="size-6" />
    //           </a>
    //         </div>
    //       </div>
    //       <main className="w-full text-base px-2 py-1 rounded-b-lg z-10 text-blank image ">
    //         <div className="flex items-center justify-between py-4">
    //           <h3 className="flex-1 font-bold text-center">{nameProject}</h3>
    //         </div>
    //         <p className="text-sm line-clamp-2">{description}</p>
    //       </main>
    //     </li>
    <li
      className="h-[240px] w-[360px] rounded-lg flex flex-col items-center justify-center overflow-hidden relative shadow-md dark:shadow-obscure-light
  group/title group/image text-obscure-dark dark:text-blank-light dark:bg-first-dark/60 md:h-[240px] md:w-[360px] lg:h-[300px] lg:w-[420px]"
    >
      <div
        className={`w-full h-full flex-1 rounded-md grayscale image group-hover/image:grayscale-0 flex overflow-hidden`}
      >
        <a href={urlProject} target="_blank" className="w-full h-full">
          <img
            src={coverImage ?? "./icons/Image"}
            alt={`${nameProject} screenshot app`}
            className="h-full w-full object-cover"
          />
        </a>
      </div>
      <main className="w-full text-base px-2 py-1 absolute bottom-0 rounded-b-lg hidden z-10 text-blank image group-hover/image:block group-hover/image:bg-obscure-dark/80">
        <div className="flex items-center justify-between">
          <h3 className="flex-1 font-bold">{nameProject}</h3>
          <div className="mb-2 flex items-center justify-center gap-2 text-xl">
            {collaboration && (
              <span title="Project collaborative">
                <PuzzlePice className="size-6" />
              </span>
            )}
            <a
              href={urlProject}
              target="_blank"
              className="p-1 hover:text-obscure hover:bg-blank rounded-full"
              title="Preview in another tab"
            >
              <ArrowTopRightOnSquare className="size-6" />
            </a>
            <a
              href={urlGitHub}
              target="_blank"
              className="p-1 hover:text-obscure hover:bg-blank rounded-full"
              title="Go to the project repository"
            >
              <GithubIcon className="size-6" />
            </a>
          </div>
        </div>
        <p className="text-sm line-clamp-2">{description}</p>
      </main>
    </li>
    // </section>
  );
};
