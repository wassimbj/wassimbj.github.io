import React from "react"
// gsap.to("#image", { duration: 1, scale: 2, ease: "expoScale(1, 2)" });

export default function WorkCard({ img, links, tags, marginB }) {
  return (
    <div className={`${marginB}`}>
      <div
        className="workCard rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Work links (github & webiste) */}
        <div className="p-2">
          <ul className="list-inline mb-0">
            {links.github ? (
              <li className="inline-block mr-3">
                <a
                  href={`${links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition flex bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
            ) : links.buy ? (
              <li className="inline-block mr-3">
                <a
                  href={`${links.buy}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition flex bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </a>
              </li>
            ) : null}
            <li className="inline-block">
              <a
                href={`${links.preview}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition flex bg-gray-800 text-gray-200 hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End of workCard */}
      <div className="mt-2 p-1">
        <ul className="list-inline">
          {tags.map((tag, i) => {
            return (
              <li className="inline-block text-xs" key={i}>
                <span className="text-muted">{tag}</span>
                {tags[tags.length - 1] !== tag && <span className="mx-2">.</span>}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
