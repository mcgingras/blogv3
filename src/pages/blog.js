import React from "react"
import { graphql } from "gatsby"
import PostList from '../components/postList'
import SEO from "../components/seo"

import "../style/index.scss"
import "../style/font.scss";

const IndexPage = ({ data }) => {


  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <SEO title="Blogs" />
        <div className="full-height">
          <div className="post--header">
            <hr className="hr hr-4" />
          </div>

          <div className="container">
            <PostList posts={posts} title="ALL BLOG POSTS" />
          </div>
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
            path
          }
          excerpt
        }
      }
    }
  }
`
