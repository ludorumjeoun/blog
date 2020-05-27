import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

import BlogAuthorHeader from "../components/blog-author-header"
import FormattedDate from "../components/formatted_date"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <SEO
        keywords={frontmatter.tags || []}
        title={frontmatter.title}
        />
        <article className="blog-post">
            <h2 className="block flex flex-col justify-center items-center">
              <FormattedDate date={frontmatter.date}/>
            </h2>
            <div
              className="blog-post-content markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`