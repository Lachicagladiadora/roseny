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
    <li
      className="h-[400px] w-[290px] p-4 rounded-lg flex flex-col items-center justify-center overflow-hidden shadow-md 
group/title group/image text-blank-light bg-obscure-light md:h-[520px] md:w-[360px] lg:h-[580px] lg:w-[420px]"
    >
      <div
        className={`relative w-full h-full flex-1 rounded-md grayscale image group-hover/image:grayscale-0 flex overflow-hidden`}
      >
        <a href={urlProject} target="_blank" className="w-full h-full">
          <img
            src={coverImage ?? "./icons/Image"}
            alt={`${nameProject} screenshot app`}
            className="h-full w-full object-cover"
          />
        </a>
        <div className="absolute bottom-0 right-0 flex items-center justify-center gap-2 text-xl bg-blank/15 rounded-ss-2xl p-2 ">
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
      <main className="w-full text-base px-2 py-1 rounded-b-lg z-10 text-blank image ">
        <div className="flex items-center justify-between py-4">
          <h3 className="flex-1 font-bold text-center">{nameProject}</h3>
        </div>
        <p className="text-sm line-clamp-2">{description}</p>
      </main>
    </li>
    // <div className="w-1/3 h-1/5 bg-obscure-light rounded-md shadow-md">
    //   <div>{urlGitHub}</div>
    //   <a
    //     href={urlGitHub}
    //     target="_blank"
    //     className="p-1 size-8 hover:text-obscure hover:bg-blank rounded-full"
    //     title="Preview in another tab"
    //   >
    //     <GithubIcon />
    //   </a>
    //   <a
    //     href={urlProject}
    //     target="_blank"
    //     className="p-1 hover:text-obscure hover:bg-blank rounded-full"
    //     title="Go to the project repository"
    //   >
    //     <ArrowTopRightOnSquare />
    //   </a>
    //   <div>{urlProject}</div>
    //   <div>{collaboration}</div>
    //   <img src={coverImage} alt={nameProject + " image"} />
    //   <div>{description}</div>
    // </div>
    // </section>
  );
};
