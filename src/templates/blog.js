import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import "../style/index.scss";
import "../style/font.scss";

export default ({ data }) => {
  const post = data.markdownRemark
  var newDate = new Date(post.frontmatter.date.split(' ')[0]);
  console.log(newDate);
  
  return (
    <div>
      <SEO title="Home" />
      <div className="container">
        <div className="container--title small">
          <p>{post.frontmatter.title}</p>
          <p>{newDate.toString()}</p>
        </div>
        <div className='container--title big'>
         <section className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        subtitle
        date
      }
    }
  }
`
