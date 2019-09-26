import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from '../components/postList'
import StickyHeader from '../components/stickyHeader';
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {


  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blogs" />
        <div className="full-height">
          <div className="post--header">
            <StickyHeader />
            <hr className="hr hr-4" />
          </div>

          <div className="container">
            <PostList posts={posts} title="ALL BLOG POSTS" />
            <Footer />
          </div>
        </div>
    </Layout>
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
