import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import hs from '../images/hs.png';
import smile from '../images/smile.png';

import "../style/index.scss"
import "../style/font.scss";

const IndexPage = ({ data }) => {

  return (
    <div>
      {/* <SEO title="Home" /> */}
        <div className="container">
          <div className="container--title">
           <p className="">{data.site.siteMetadata.description}</p>
            <img src={smile} />
          </div>
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
