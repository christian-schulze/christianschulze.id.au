import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  font-style: normal;
  font-weight: normal;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Icon = ({ icon }) => (
  <Svg viewBox={icon.viewBox}>
    <path d={icon.path} />
  </Svg>
)

Icon.propTypes = {
  icon: PropTypes.shape({
    viewBox: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
}

export default Icon
