import React from "react";
import { WorkProps } from "../types";

export default function WorkCard({
  code,
  demo,
  description,
  title,
}: WorkProps) {
  return (
    <article className="bg-lightGreen/10 rounded-md p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg block font-semibold">{title}</span>
        <div className="flex items-center space-x-5">
          {code && (
            <a
              href={code}
              className="hover:bg-lightGreen/10 underline text-lightGreen active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="hover:bg-lightGreen/10 underline text-lightGreen active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </article>
  );
}
