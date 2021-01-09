import React, { Component } from "react"

export default class Banner extends Component {
  render() {
    return (
      <section className="banner" id="banner">
        <div className="container mx-auto px-3">
          <div className="flex justify-around flex-wrap">
            <div className="text-center text-2xl lg:text-6xl md:text-4xl">
              <h1>
                Hey ! <span className="text-gray-300">im wassim</span>
              </h1>
              <h1 className="md:my-6 my-4"> A Software Developer </h1>
              <h1> from Tunisia; </h1>
            </div>
          </div>

          <div className="flex justify-center items-center bannerBtns">
            <a
              href="#work"
              className="rounded-full bg-gray-700 opacity-25 text-sm cursor-pointer hover:opacity-50 text-white px-3 py-2 transition"
            >
              See My Work
            </a>
            <code className="text-gray-600 mx-2 font-bold">||</code>
            <a
              href="#contact"
              className="rounded-full bg-gray-700 opacity-25 text-sm cursor-pointer hover:opacity-50 text-white px-3 py-2 transition"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    )
  }
}
