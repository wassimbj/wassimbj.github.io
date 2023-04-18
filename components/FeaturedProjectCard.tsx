import Image from "next/image";
import React from "react";

interface Props {
  reverse?: boolean;
  image: string;
  title: string;
  subtitle: string;
  demo: string;
  code: string;
  description: string;
  builtWith: Array<{ name: string; img: string }>;
}
export default function FeaturedProjectCard({
  reverse,
  builtWith,
  code,
  demo,
  description,
  image,
  subtitle,
  title,
}: Props) {
  return (
    <div className={`p-2 max-w-3xl ${reverse && "ml-auto"}`}>
      <div
        className={`flex items-start justify-center md:flex-nowrap flex-wrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="border border-lightGreen/70 rounded-full p-0.5">
          <a
            href={demo || code}
            target="_blank"
            rel="noreferrer"
            className="block group w-40 h-40 rounded-full relative overflow-hidden"
          >
            <span className="absolute transition-colors group-hover:bg-opacity-0 left-0 top-0 w-full h-full bg-lightGreen bg-opacity-30 z-10"></span>
            <Image
              fill
              className="absolute top-0 left-0 right-0 bottom-0 z-0 object-cover"
              src={image}
              alt=""
            />
          </a>
        </div>

        {/* ----------------------- */}
        <div className={`${reverse ? "md:mr-5 mr-0" : "md:ml-5 ml-0"}`}>
          <div className="md:text-left mb-3 text-center">
            <div className="flex items-center md:justify-normal justify-center flex-wrap md:py-0 py-2">
              <span className="text-2xl block mr-5 text-white font-semibold">
                {title}
              </span>
              <div className="space-x-2 flex items-center">
                {code && (
                  <a
                    target="_blank"
                    rel="noreferrer"
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
                    target="_blank"
                    rel="noreferrer"
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
            </div>
            <span className="text-lightGreen text-opacity-70 text-sm">
              {subtitle}
            </span>
          </div>
          <p className="md:text-base font-light text-sm">{description}</p>
          <div className="flex items-center space-x-2 mt-5">
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
    </div>
  );
}
