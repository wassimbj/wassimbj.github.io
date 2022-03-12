import Image from "next/image";
import React from "react";

export default function FeaturedProjectCard() {
  return (
    <div className="p-2 max-w-3xl mx-auto">
      <div className="flex items-center justify-center md:flex-nowrap flex-wrap">
        <div className="border-2 border-lightGreen rounded-full p-1">
          <div className="w-60 h-60 rounded-full relative overflow-hidden">
            <span className="absolute left-0 top-0 w-full h-full bg-lightGreen bg-opacity-30 z-10"></span>
            <Image
              layout="fill"
              className="absolute top-0 left-0 right-0 bottom-0 z-0 object-cover"
              src="https://mobirise.com/assets52/images/poster.png"
              alt=""
            />
          </div>
        </div>
        {/* ----------------------- */}
        <div className="md:ml-5 ml-0">
          <span className="text-3xl mb-3 block md:text-left text-center text-white font-semibold">
            Beamaan
          </span>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex items-center space-x-4 mt-5">
            <div>
              <Image
                src="/langs-icons/GoLang.svg"
                alt=""
                height="30px"
                width="30px"
              />
            </div>
            <div>
              <Image
                src="/langs-icons/PostgreSQL-Light.svg"
                alt=""
                height="30px"
                width="30px"
              />
            </div>
            <div>
              <Image
                src="/langs-icons/NextJs-Light.svg"
                alt=""
                height="30px"
                width="30px"
              />
            </div>
            <div>
              <Image
                src="/langs-icons/TypeScript.svg"
                alt=""
                height="30px"
                width="30px"
              />
            </div>
            <div>
              <Image
                src="/langs-icons/Redis-Light.svg"
                alt=""
                height="30px"
                width="30px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
