const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    });

    createNodeField({
      name: `slug`,
      node,
      value: `${relativeFilePath}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const allMarkdownNodes = result.data.allMarkdownRemark.nodes;

  if (allMarkdownNodes.length > 0) {
    allMarkdownNodes.forEach((node) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          slug: `${node.fields.slug}`,
        },
      });
    });
  }
};
