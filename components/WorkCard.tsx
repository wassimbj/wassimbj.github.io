import React from "react";
import { WorkProps } from "../types";

export default function WorkCard({
  code,
  demo,
  description,
  title,
}: WorkProps) {
  return (
    <article className="rounded-xl border border-[#dff5ee] bg-[#f4fbf8] p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="block text-lg font-semibold text-slate-900">{title}</span>
        <div className="flex items-center space-x-5">
          {code && (
            <a
              href={code}
              className="text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5] active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="text-[#1d7d68] underline decoration-[#9adcc8] underline-offset-4 hover:bg-[#eafaf5] active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-slate-700">{description}</p>
    </article>
  );
}
