import React from "react"
import ContactInfo from "../components/ContactInfo"

export default function Contact() {
  return (
    <React.Fragment>
      <section className="footer" id="contact">
        <div className="max-w-xl text-center mx-auto pt-16 px-3">
          <ContactInfo />
        </div>
      </section>
    </React.Fragment>
  )
}
