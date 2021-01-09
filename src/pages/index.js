import React from "react"
import SEO from "../components/seo"
import DesktopNavbar from "../components/DesktopNavbar"
import Banner from "../sections/Banner"
import About from "../sections/About"
import Work from "../sections/Work"
import Contact from "../sections/Contact"

const IndexPage = () => {
  return (
    <>
      <SEO title="Hey! Welcome" />
      <div>
        <div className="relative" style={{ zIndex: "999999" }}>
          <DesktopNavbar />
          {/* <MobileNavbar /> */}
        </div>
        <main>
          <Banner />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default IndexPage
