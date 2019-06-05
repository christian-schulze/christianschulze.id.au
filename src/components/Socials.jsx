import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { getIcon } from "utils/icons"

import Icon from "components/Icon"

const Container = styled.div`
  margin-bottom: 16px;

  ul {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    list-style: none;
    padding: 0;
    margin: 10px -3px;
    width: auto;

    li {
      padding: 0;
      margin: 4px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      height: $button-height;
      width: $button-height;
      line-height: $button-height;
      border-radius: 50%;
      text-align: center;
      border: 1px solid $color-gray-bg;

      a {
        border: 0;
        display: flex;
        color: $color-base;

        &:hover,
        &:focus {
          color: $color-primary;
        }
      }
    }
  }
`

const Socials = ({ className, socials }) => (
  <Container className={className}>
    <ul>
      {Object.keys(socials).map(name => (
        <li key={name}>
          <a href={socials[name]} rel="noopener noreferrer" target="_blank">
            <Icon icon={getIcon(name)} />
          </a>
        </li>
      ))}
    </ul>
  </Container>
)

Socials.propTypes = {
  className: PropTypes.string,
  socials: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Socials
