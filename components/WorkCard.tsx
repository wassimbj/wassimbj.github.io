import React from "react";
import { WorkProps } from "../types";
import CodeIcon from "./CodeIcon";
import LinkIcon from "./LinkIcon";

export default function WorkCard({
  code,
  demo,
  description,
  title,
}: WorkProps) {
  return (
    <article className="bg-[#0a3d4b] rounded-md p-3">
      <div className="flex items-center mb-1">
        <span className="text-lg block mr-2 font-semibold">* {title}</span>
        <div className="flex items-center space-x-1">
          {code && (
            <a href={code} className="hover:opacity-40 active:scale-95" target="_blank" rel="noreferrer">
              <CodeIcon />
            </a>
          )}
          {demo && (
            <a href={demo} className="hover:opacity-40 active:scale-95" target="_blank" rel="noreferrer">
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm">{description}</p>
    </article>
  );
}
