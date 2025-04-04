import React from "react";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";
import { GithubIcon } from "./icons/GithubIcon";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((c, i) => (
        <li
          key={i}
          className="w-full flex flex-col gap-4 items-center justify-center md:flex-row md:gap-12"
        >
          <div className="w-full md:w-1/2">
            <div className=" font-bold text-blank-light">
              <span>{c.name}</span>
              <span>
                ({c.collaboration ? "collaboration" : "personal project"})
              </span>
            </div>
<div class"flex flex-wrap gap-4">
	{c.tech.map((cur)=><div class=”px-4 py-2 border border-second text-second rounded-full ”>{cur}<div/>)}
<div/>
            <div>
              <p className="py-3 indent-12">{c.about}</p>
              <div className="flex gap-6">
                <a
                  href={c.urlProject}
                  target="_blank"
                  className="font-semibold flex gap-2 items-center justify-center hover:text-second"
                >
                  Website <ArrowTopRightOnSquare className="size-4 md:size-7" />
                </a>
                {c.urlGitHub && (
                  <a
                    href={c.urlGitHub}
                    target="_blank"
                    className="font-semibold flex gap-2 items-center justify-center hover:text-second"
                  >
                    Repository <GithubIcon className="size-4 md:size-7" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <a href={c.urlProject} target="_blank">
              <img
                src={c.coverImage}
                alt={`${c.name} image demo`}
                className=""
              />
            </a>
          </div>
        </li>
      ))}
    </>
  );
};
