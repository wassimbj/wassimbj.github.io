import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404 Not Found" />
    <div className="pt-24 pb-16 px-3">
      <span className="block text-center text-gray-300 font-semibold text-4xl">
        404 NOT FOUND
      </span>
      <Link
        to="/"
        className="mt-8 block px-5 py-2 bg-gray-500 text-white rounded-full transition hover:bg-gray-600 text-center mx-auto w-32"
      >
        Go back
      </Link>
    </div>
  </>
)

export default NotFoundPage
