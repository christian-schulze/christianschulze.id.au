import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { Normalize } from "styled-normalize"

import { LocationContext } from "components/LocationContext"
import GlobalStyles from "styles/GlobalStyles"
import { rhythm } from "utils/typography"
import { LargeHeader, SmallHeader } from "components/Headers"
import Footer from "components/Footer"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const StyledFooter = styled(Footer)`
  margin-top: 32px;
`

const Layout = ({ children }) => {
  const location = React.useContext(LocationContext)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const { title } = data.site.siteMetadata

        const rootPath = `${__PATH_PREFIX__}/`
        const header =
          location.pathname === rootPath ? (
            <LargeHeader title={title} />
          ) : (
            <SmallHeader title={title} />
          )

        return (
          <>
            <Normalize />
            <GlobalStyles />
            <Container>
              {header}
              <main>{children}</main>
              <StyledFooter />
            </Container>
          </>
        )
      }}
    />
  )
}

export default Layout
