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
          <div>
            <img src={smile} />
            <h1>Hi, It's Michael. I'm exploring what it means for computers to be creative, and writing about the internet.</h1>
            <div className="half">
            <p>Right now I'm taking a mini sabatical to focus on research areas I find particularly interesting (currently, computers + creativity). Previously I've worked at Nasdaq R&D, <a href="https://ideocolab.com">IDEO CoLab,</a> and studied CS at Cornell.</p>
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
