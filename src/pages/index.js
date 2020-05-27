import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/post-link"
import BlogAuthorHeader from "../components/blog-author-header"
import FormattedDate from "../components/formatted_date"
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    const self = this;
  }
  
  render () {
    let {allMarkdownRemark} = this.props.data
    let {edges} = allMarkdownRemark
    let posts = edges.map(({node}) => {
      return <PostLink key={node.id} post={node}/>
    })
    return (
      <Layout>
        <SEO
          keywords={['ludorum.dev', `ludorum`, `blog`, 'developer']}
          title="Home"
        />
        <BlogAuthorHeader/>
        <section className="pb-4 mb-4">
          <h2 className="block flex justify-center items-center">
          <span className="text-base font-bold">최근 작성된 포스트</span>
          </h2>
          {posts}
        </section>
      </Layout>
    )
  }
}

export default IndexPage;

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