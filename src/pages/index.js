import React from "react"
import SEO from "../components/seo"
import About from "../sections/About"
import Contact from "../sections/Contact"

const IndexPage = () => {
  return (
    <>
      <SEO title="Hey! Welcome" />
      <main style={{
        background: "url('/texture_05.png')",
        width: "100%",
        height: "100%"
      }}>
        <About />
        <Contact />
      </main>
    </>
  )
}

export default IndexPage
