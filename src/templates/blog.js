import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="full-height">
        <div className="post--header gradient--blue">
          <hr className="hr hr-8" />
          <header className="container">
            <div className="row">
              <div className="col col-offset-2 col-8 mob-col-12 mob-no-offset text-center">
              <h2 className="blog--title">{post.frontmatter.title}</h2>
              <p className="blog--subtitle">{post.frontmatter.subtitle}</p>
              <div className="blog--tags">
                {/* <span className="blog--tags-tag">Tech</span> */}
              </div>
              </div>
            </div>
          </header>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <section className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
