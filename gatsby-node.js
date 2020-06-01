// exports.onCreateNode = async function(
//   { node, loadNodeContent, actions, createNodeId, reporter }
// ) {
//   if (node.internal.mediaType === 'text/html') {
//     const textContent = await loadNodeContent(node)
//     let pattern = /^---\n((?:.+\n)*)---\s+([\s\S]+)/i; // I THINK THIS IS WHERE MY DESIGN IS BORKED
//     let parse = pattern.exec(textContent);
//     let yaml = parse[1];
//     let html = parse[2];
//     reporter.info(['YAML => ', yaml, 'HTML => ', html.length]);
//     node.meta = yaml;
//     node.html = html;
//   }
// }
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const markdownPostTemplate = require.resolve(`./src/templates/markdownPost.js`)
    return Promise.all([
      graphql(`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              slug: {
                ne: null
              }
            }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
      `).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }
        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.slug,
            component: markdownPostTemplate,
            context: {
              // additional data can be passed via context
              slug: node.frontmatter.slug,
            },
          })
        })
      })
  ])
}