import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "utils/typography"

const Header = styled.header`
  h1 {
    ${scale(1.5)};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
  }

  a {
    box-shadow: none;
    background-image: none;
    text-decoration: none;
    color: inherit;
  }
`

export const LargeHeader = ({ title }) => {
  return (
    <Header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </Header>
  )
}

LargeHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
