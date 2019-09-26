import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from '../components/postList'
import Footer from "../components/footer"
import SEO from "../components/seo"

import cool from '../images/cool.gif';

const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges;
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
        <header className="header">
          <img className="extras" src={cool} style={{position: 'absolute', left: '65%', top: '25%', width: "200px"}}/>
          <h1>m's <br/> studio</h1>
        </header>
        <div className="body--container mb-6">
        </div>
        <div className="container bg--white">
          <div className="row mb-6">
            <div className="col-6 mob-col-12">
              <p className="sporting-bold fs-med">{data.site.siteMetadata.description} <a href="/about" className="smallcaps">more</a></p>
            </div>
          </div>
          <PostList posts={posts} title="RECENT POSTS"/>
          <Footer />
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
