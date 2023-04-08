import Image from "next/image";
import React from "react";

interface Props {
  demo: string;
  code: string;
  title: string;
  description: string;
  builtWith: Array<{ name: string; img: string }>;
}

export default function NoteWorthyProjectCard({
  builtWith,
  code,
  demo,
  description,
  title,
}: Props) {
  return (
    <div className="bg-[#0a3d4b] rounded-md p-4 relative">
      <div className="flex items-center space-x-3">
        {code && (
          <a
            rel="noreferrer"
            target="_blank"
            href={code}
            className="block transition-colors bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4"
                // stroke="#FF8A65"
                className="stroke-lightGreen"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                // stroke="#FF8A65"
                className="stroke-lightGreen"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        )}
        {demo && (
          <a
            rel="noreferrer"
            target="_blank"
            href={demo}
            className="block transition-colors bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                // stroke="#FF8A65"
                className="stroke-lightGreen"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
              ></path>
            </svg>
          </a>
        )}
      </div>
      <div className="flex flex-col flex-none">
        <span className="mt-2 mb-4 font-semibold text-lg text-white inline">
          {title}
        </span>
        <p className="text-sm mb-8 font-light">{description}</p>
      </div>

      <div className="absolute bottom-2 left-2">
        <div className="flex items-center space-x-2 self-end">
          {builtWith.map((item, i) => (
            <div key={i} title={item.name}>
              <Image
                src={`/langs-icons/${item.img}`}
                alt=""
                height={22}
                width={22}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
