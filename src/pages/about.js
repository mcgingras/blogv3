import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from "../components/footer"
import StickyHeader from '../components/stickyHeader';
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="About" />
        <div className="full-height">
          <StickyHeader />
          <hr className="hr-1" />
          <div className="container post--header">
            <h1 className="sporting-bold">About Michael</h1>
            <Img fluid={data.file.childImageSharp.fluid} />
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
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1470) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
