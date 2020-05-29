import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const auditionPage = () => {
  return (
    <Layout>
      <h1>Audition Info!</h1>
      <p>
        Our auditions will be held in the CRC. For additional information
        contact us <Link to="/contact">here</Link>!
      </p>
    </Layout>
  )
}

export default auditionPage
