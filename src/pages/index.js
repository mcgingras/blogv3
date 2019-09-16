import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostList from '../components/postList'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {


  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
        <header className="header">
          <h1>m's <br/> studio</h1>
        </header>
        <div className="body--container mb-6">
        </div>
        <div className="container bg--white">
          <div className="row mb-6">
            <div className="col-6 mob-col-12">
              <p className="sporting-bold fs-med">{data.site.siteMetadata.description}</p>
            </div>
          </div>
          <PostList posts={posts} />
        </div>
        {/*<Image />*/}
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
