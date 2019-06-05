import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-transform: uppercase;
  text-align: center;
  opacity: 0.35;

  a {
    background-image: none;
    text-decoration: none;
  }
`

const Footer = ({ className }) => (
  <StaticQuery
    query={siteQuery}
    render={data => {
      const { author } = data.site.siteMetadata

      return (
        <StyledFooter className={className}>
          <p>
            © {new Date().getFullYear()} {author}
            <br />
            <small>
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>,&nbsp;
              <a href="https://github.com/christian-schulze/christianschulze.id.au">
                source code on github
              </a>
            </small>
          </p>
        </StyledFooter>
      )
    }}
  />
)

Footer.propTypes = {
  className: PropTypes.string,
}

const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Footer
