import React from "react";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";
import { GithubIcon } from "./icons/GithubIcon";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((c) => (
        <li className="w-full flex flex-col gap-4 items-center justify-center md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="font-bold text-blank-light">
              <span className="capitalize">{c.name}</span> (
              {c.collaboration ? "collaboration" : "personal project"})
            </div>
            <div>
              <p>{c.about}</p>
              <p className="flex gap-6">
                <a
                  href={c.urlProject}
                  className="font-bold flex gap-2 items-center justify-center hover:text-second-light"
                >
                  Website <ArrowTopRightOnSquare className="size-4 md:size-6" />
                </a>
                <a
                  href={c.urlGitHub}
                  className="font-bold flex gap-2 items-center justify-center hover:text-second-light"
                >
                  Repository <GithubIcon className="size-4 md:size-6" />
                </a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={c.coverImage} alt={`${c.name} image demo`} className="" />
          </div>
        </li>
      ))}
    </>
  );
};
