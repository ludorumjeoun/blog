import React from "react"
import { Link } from "gatsby"
import FormattedDate from "./formatted_date"
const PostLink = ({ post }) => (
  <article className="blog-post pb-8 text-left">
    <Link to={post.frontmatter.slug}>
      <div className="blog-post-header flex items-baseline">
          <h1 className="text-base pr-2 text-gray-800">{post.frontmatter.title}</h1>
          <FormattedDate date={post.frontmatter.date}></FormattedDate>
      </div>
      { post.excerpt && (<div className="blog-post-content text-gray-600 text-sm">{post.excerpt}</div>) }
    </Link>
  </article>
)
export default PostLink