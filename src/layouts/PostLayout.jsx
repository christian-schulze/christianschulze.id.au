import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Disqus from "gatsby-plugin-disqus"

import Layout from "layouts/Layout"

const PostLayout = ({ data }) => {
  const id = data.mdx.id
  const body = data.mdx.code.body
  const { path, title } = data.mdx.frontmatter
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <Disqus identifier={id} title={title} url={`${siteUrl}${path}`} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
      }
      code {
        body
      }
    }
    site {
      ...SiteSiteMetadata
    }
  }
`

export default PostLayout
