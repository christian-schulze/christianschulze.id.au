import { useStaticQuery, graphql } from "gatsby"

export const siteMetadataFragment = graphql`
  fragment SiteSiteMetadata on Site {
    siteMetadata {
      title
      description
      author
      socials {
        twitter
        email
        linkedin
        github
      }
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
