import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { DiscussionEmbed } from "disqus-react"

import Layout from "layouts/Layout"

const PostLayout = ({ data }) => {
  const { id } = data.mdx
  const { body } = data.mdx.code
  const { path, title } = data.mdx.frontmatter
  const { siteUrl } = data.site.siteMetadata

  const { disqusShortName } = data.site.siteMetadata
  const disqusConfig = {
    identifier: id,
    title: title,
    url: `${siteUrl}${path}`,
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
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
