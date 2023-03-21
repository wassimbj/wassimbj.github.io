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
          <a href={demo || code} target="_blank" rel="noreferrer" className="block hover:opacity-70 transition-opacity w-44 h-44 rounded-full relative overflow-hidden">
            <span className="absolute left-0 top-0 w-full h-full bg-lightGreen bg-opacity-30 z-10"></span>
            <Image
              layout="fill"
              className="absolute top-0 left-0 right-0 bottom-0 z-0 object-cover"
              src={image}
              alt=""
            />
          </a>
        </div>

        {/* ----------------------- */}
        <div className={`${reverse ? "md:mr-5 mr-0" : "md:ml-5 ml-0"}`}>
          <div className="md:text-left mb-3 text-center">
            <span className="text-3xl block text-white font-semibold">
              {title}
            </span>
            <span className="text-lightGreen text-opacity-70 text-sm">{subtitle}</span>
          </div>
          <p>{description}</p>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center space-x-2">
              {builtWith.map((item, i) => (
                <div key={i} title={item.name}>
                  <Image
                    src={`/langs-icons/${item.img}`}
                    alt=""
                    height="25px"
                    width="25px"
                  />
                </div>
              ))}
            </div>
            <div className="space-x-3 flex items-center">
              {code && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={code}
                  className="block bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                  className="block bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
        </div>
      </div>
    </div>
  );
}
