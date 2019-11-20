import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import "../style/index.scss";
import "../style/font.scss";
import smile from '../images/smile.png';

export default ({ data }) => {
  const post = data.markdownRemark
  const newDate = new Date(post.frontmatter.date.split(' ')[0]);
  console.log(post);
  
  
  return (
    <div>
      <SEO title="Home" />
      <div className="container">
        <a href="/"><img src={smile} /></a>
        <h1>{post.frontmatter.title}</h1>
        <p>{newDate.toString()}</p>

        <hr className="divider" />
        <div className='half'>
         <section className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

      <hr className="divider" />

      <footer>
            <a mailto="mcg79@cornell.edu">email</a>
            <a href="https://are.na/michael-gingras-aqtwtixvoky">are.na</a>
            <a href="https://twitter.com/michaelgingras">twitter</a>
            <a href="https://github.com/mcgingras">github</a>
      </footer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
        date
      }
    }
  }
`
