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
<<<<<<< HEAD
          <div className="container--title small">
            <p className="logo--container">
              {renderStringWithCOLOR("Michael's Studio")}
            </p>
            <p>On a mini sabbatical doing small research projects in a great effort to figure out where my life needs to flow.</p>
            <p><em>Currently: Computational Creativity</em></p>
            <p>Purusing research in the domain of computational creativity, especially from the lens of how we can enable humans to feel creative through the act of computing</p>
=======
          <div>
            <img src={smile} />
            <h1>Hi, It's Michael. I'm exploring what it means for computers to be creative, and writing about the internet.</h1>
            <div className="half">
            <p>Right now I'm taking a mini sabatical to focus on research areas I find particularly interesting (currently, computers + creativity). Previously I've worked at Nasdaq R&D, <a href="https://ideocolab.com">IDEO CoLab,</a> and studied CS at Cornell.</p>
            <p>Outside of work I'm active in the triathlon community, and will be representing <a href="https://fullsendtriathlon.com">Full Send</a> in the 2020 season.</p>
            </div>
>>>>>>> 31732d77034d8b305741dc84812b100876c3e5b0
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
