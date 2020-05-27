import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const homePage = () => {
  return (
      <Layout>
        <h1>Welcome.</h1>
          <p><Link to="/contact">Contact Us!</Link></p>
          <p>Check out our <Link to="/member-profile">members</Link>!</p>
          <p>Interested in joining? Click <Link to="/auditions">here</Link> for audition details!!</p>
          <p>GT Seoulstice is Georgia Tech's K-Pop dance team founded in 2016.</p>
      </Layout>
  )
}

export default homePage
