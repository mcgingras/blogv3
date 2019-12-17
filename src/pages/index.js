import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import smile from '../images/smile.png';
import PostList from '../components/postList';

import "../style/index.scss"
import "../style/font.scss";

const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <SEO title="Home" />
        <div className="container">
          <div>
            <img src={smile} />
            <h1>Michael's Studio. Exploring learning, play, creativity, and how technology ties it all together.</h1>
            <div className="half">
            <p>I'm taking a mini sabatical to focus on independent research. Currently, I'm investigating games as a mechanism for learning. Previously I was a SWE at Nasdaq R&D, a fellow at <a href="https://ideocolab.com">IDEO CoLab,</a> and a student at Cornell.</p>
            <p>Outside of work I'm active in the triathlon community, and will be representing <a href="https://fullsendtriathlon.com">Full Send</a> in the 2020 season.</p>
            </div>
          </div>

          <hr className="divider" />

          <div>
            <PostList posts={posts} /> 
          </div>

          <hr className="divider" />

          <footer>
            <a mailto="mcg79@cornell.edu">email</a>
            <a href="https://are.na/michael-gingras-aqtwtixvoky">are.na</a>
            <a href="https://twitter.com/michaelgingras">twitter</a>
            <a href="https://github.com/mcgingras">github</a>
          </footer>
        </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
            path
          }
          excerpt
        }
      }
    }
  }
`
