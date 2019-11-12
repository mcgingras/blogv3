import React, {useState} from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import smile from '../images/smile.png';
import PostList from '../components/postList';

import "../style/index.scss"
import "../style/font.scss";

const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges;
  const [faded, setFaded] = useState(false);

  const colorList = [
    'CornflowerBlue',
    'SlateGrey',
    'SteelBlue',
    'Navy',
    'RosyBrown',
    'Orange',
    'SeaGreen',
    'DarkGoldenRod',
    'DarkRed',
    'ForestGreen'
  ]

  const renderStringWithCOLOR = (str) => {
    return str.split('').map((c, i) => {
      const color = colorList[Math.floor(Math.random()*colorList.length)]
      return (
        <span key={i} className="logo" style={{color:color}}>{c}</span>
      )
    })
  }

  return (
    <div>
      <SEO title="Home" />
        <div className="container">
          <div className="container--title small">
            {/* <p>Michael's Studio</p> */}
            <p className="logo--container">
              {renderStringWithCOLOR("Michael's Studio")}
            </p>
            <p>Currently on a mini sabbatical doing small research projects in a great effort to figure out where my life needs to flow.</p>
          </div>
          <div className='container--img-faded big'>
            <PostList posts={posts} /> 
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
            tags
            path
          }
          excerpt
        }
      }
    }
  }
`
