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
          <StickyHeader />
          <hr className="hr-1" />
          <div className="container post--header">
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
