import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  h3 {
    font-family: Montserrat, sans-serif;
    margin-top: 0;
  }

  a {
    box-shadow: none;
    background-image: none;
    text-decoration: none;
    color: inherit;
  }
`

export const SmallHeader = ({ title }) => {
  return (
    <Header>
      <h3>
        <Link to="/">{title}</Link>
      </h3>
    </Header>
  )
}

SmallHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
