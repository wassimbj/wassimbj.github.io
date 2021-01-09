import React from "react"

export default function ContactInfo() {
  return (
    <React.Fragment>
      <div>
        <h3 className="text-xl text-gray-600 mb-3"> Start a conversation </h3>
        <span className="p-2 px-4 rounded-full border border-gray-800 hover:border-gray-700 inline-block transition"> wassimjdida.dev@gmail.com </span>
      </div>

      {/* Social links */}
      <div className="mt-10">
        <h3 className="text-xl text-gray-600 mb-3"> Find me on </h3>
        <ul className="flex items-center flex-wrap">
          <li>
            <a
              href="https://linkedin.com/in/wassimdev"
              target="_blank"
              rel="noopener noreferrer"
              className="linkAboutMe transition"
            >
              Linkedin
            </a>
          </li>
          <li className="mx-3 text-gray-800"></li>
          <li>
            <a
              href="https://github.com/wassimbj"
              target="_blank"
              rel="noopener noreferrer"
              className="linkAboutMe transition"
            >
              Github
            </a>
          </li>
          <li className="mx-3 text-gray-800"></li>
          <li>
            <a
              href="https://codepen.io/wassimbj"
              target="_blank"
              rel="noopener noreferrer"
              className="linkAboutMe transition"
            >
              Codepen
            </a>
          </li>
          <li className="mx-3 text-gray-800"></li>
          <li>
            <a
              href="https://twitter.com/bjwassim"
              target="_blank"
              rel="noopener noreferrer"
              className="linkAboutMe transition"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
