import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import  hs  from '../images/hs.png';

import "../style/index.scss"
import "../style/font.scss";

const IndexPage = ({ data }) => {

  return (
    <div>
      <SEO title="Home" />
        <div className="container">
          <p className="">{data.site.siteMetadata.description}</p>
          <div className="container--img">
            <img src={hs} />
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
