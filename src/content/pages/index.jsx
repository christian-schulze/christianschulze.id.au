import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "components/Bio"
import Layout from "layouts/Layout"
import SEO from "components/Seo"
import { rhythm } from "utils/typography"

const Post = styled.div`
  h3 {
    margin-bottom: ${rhythm(1 / 4)};
  }

  a {
    box-shadow: none;
    text-decoration: none;
    background-image: none;
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.path
        return (
          <Post key={node.frontmatter.path}>
            <h3>
              <Link to={node.frontmatter.path}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p>{node.frontmatter.description || node.excerpt}</p>
          </Post>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            path
            title
          }
        }
      }
    }
  }
`
