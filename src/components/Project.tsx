import React from "react";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";
import { GithubIcon } from "./icons/GithubIcon";
import { PROJECTS } from "../constants";

export const Project = () => {
  return (
    <>
      {PROJECTS.map((c) => (
        <li className="w-full flex flex-col gap-4 items-center justify-center md:flex-row md:gap-12">
          <div>
            <div className="capitalize text-blank-light">
              {c.name} ({c.collaboration ? "collaboration" : "personal project"}
              )
            </div>
            <div>
              <p>{c.about}</p>
              <p className="flex gap-6">
                <a
                  href={c.urlProject}
                  className="flex gap-2 items-center justify-center"
                >
                  Demo <ArrowTopRightOnSquare className="size-4 md:size-6" />
                </a>
                <a
                  href={c.urlGitHub}
                  className="flex gap-2 items-center justify-center"
                >
                  Repository <GithubIcon className="size-4 md:size-6" />
                </a>
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={c.coverImage} alt={`${c.name} image demo`} className="" />
          </div>
        </li>
      ))}
    </>
  );
};
