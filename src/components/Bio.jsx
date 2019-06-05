import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "utils/typography"
import useSiteMetadata from "hooks/useSiteMetadata"

import Socials from "components/Socials"

const Container = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${rhythm(2.5)};

  > div {
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 50px;
    border-radius: 100%;
  }

  img {
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    background-image: none;
  }

  p {
    margin-bottom: 0;
  }
`

const Bio = () => {
  const data = useSiteMetadata()

  const { avatar, author, socials } = data

  return (
    <Container>
      <Image fixed={avatar} alt={author} />
      <div>
        <p>
          Written by <strong>{author}</strong>, A frontend developer living and
          working in Melbourne Australia.
        </p>
        <Socials socials={socials} />
      </div>
    </Container>
  )
}

export default Bio
