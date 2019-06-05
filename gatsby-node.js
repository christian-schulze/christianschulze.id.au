const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              path
            }
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/layouts/PostLayout.jsx`),
        context: { id: node.id },
      })
    })
  })
}
