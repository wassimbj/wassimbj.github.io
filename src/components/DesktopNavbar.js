import React, { useState } from "react"
// import Logo from '../images/logo.png'

export default function DesktopNavbar() {
  const text = "{'wassim ☕'}";
  const whenHover = "{'Hey! 😄'}";
  const [logo, setLogo] = useState(text)

  return (
    <React.Fragment>
      <header className="w-full py-2 desktop-nav absolute bg-gray-900 md:bg-transparent">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <a
            onMouseOver={() => setLogo(whenHover)}
            onMouseLeave={() => setLogo(text)}
            href="/"
            className="inline-block text-xl"
          >
            {logo}
          </a>

          <div className="hidden items-center mb-0 md:flex">
            <a
              className="px-3 transition navItem hover:text-gray-200 cursor-pointer"
              href="#about"
            >
              About
            </a>
            <a
              className="px-3 transition navItem hover:text-gray-200 cursor-pointer"
              href="#work"
            >
              Work
            </a>
            <a
              className="px-3 transition navItem hover:text-gray-200 cursor-pointer"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
