import React from "react";

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
    <div className="w-1/3 h-1/5 bg-obscure-light rounded-md shadow-md">
      {/* <header></header> */}
      <div>{urlGitHub}</div>
      <div>{urlProject}</div>
      <div>{collaboration}</div>
      <img src={coverImage} alt={nameProject + " image"} />
      <div>{description}</div>
    </div>
    // </section>
  );
};
