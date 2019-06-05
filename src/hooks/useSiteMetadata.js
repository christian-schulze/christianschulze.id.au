import { useStaticQuery, graphql } from "gatsby"

export const siteMetadataFragment = graphql`
  fragment SiteSiteMetadata on Site {
    siteMetadata {
      author
      description
      disqusShortName
      socials {
        email
        github
        linkedin
        twitter
      }
      title
    }
  }
`

const useSiteMetadata = () => {
  const { avatar, site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          ...SiteSiteMetadata
        }
      }
    `
  )

  return { avatar: avatar.childImageSharp.fixed, ...site.siteMetadata }
}

export default useSiteMetadata
