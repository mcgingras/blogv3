import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <div>
      <SEO title="About" />
        <div className="post--header">
          <hr className="hr hr-4" />
        </div>

        <div className="container">
          <h1 className="sporting-bold pb-4">About Michael</h1>
          {/* <img src={head} className="pb-6 img-bw" /> */}
          {/* <Img fluid={data.file.childImageSharp.fluid} /> */}


            <div className="row">
              <div className="col-12 mb-6">
                <section className="content">
                  <p>Hello! My name is Michael Gingras. I studied Computer Science at Cornell, then did the thing most CS grads do (got a job as a software engineer...)
                    After spending a year feeling like the work I was producing wasn't quite satsifying me in the way it needed to, I left to pursue independent projects, and to figure out what it is I want to do with the rest my life.
                    I strongly beleive we make career decisions too early in our lives, and are dangerously stuck living out those decisions for the remainder of our careers. It's silly how we let
                    the 18 year old versions of ourselves decide what's best.
                  </p>

                  <p>
                    I'm broadly interested in quite a few subjects, so here you will find writing about education, interfaces, cities, ventures, and whatever else I find interesting.
                  </p>
                </section>
              </div>
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
