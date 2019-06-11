import React from "react"
import styled from "styled-components"

import Bio from "components/Bio"
import Layout from "layouts/Layout"
import SEO from "components/Seo"
import { rhythm } from "utils/typography"

const H2 = styled.h2`
  margin-bottom: ${rhythm(1 / 4)};
`

const ContactThanks = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Bio />
      <H2>Thank you!</H2>
    </Layout>
  )
}

export default ContactThanks
