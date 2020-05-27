import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/post-link"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Blogs"
      />
      <section className="text-center">
        {Posts}
      </section>
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(truncate:true, pruneLength:120)
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`