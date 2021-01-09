import React from "react"
import ContactInfo from "../components/ContactInfo"

export default function Contact() {
  return (
    <React.Fragment>
      <section className="footer" id="contact">
        <div className="container mx-auto pt-16 px-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl text-gray-600 mb-3">
                Come on, Say Hi !
              </h3>
              <h1 className="text-gray-500 text-3xl">
                I would love, <br /> to hear from you !
              </h1>
            </div>

            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-16 border-t border-gray-800 px-2 md:px-10 py-2 text-sm text-gray-500">
          <span> Bye </span>
          <span> © {new Date().getFullYear()} — Wassim Ben Jdida </span>
        </div>
      </section>
    </React.Fragment>
  )
}
