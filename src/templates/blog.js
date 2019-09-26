import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import StickyHeader from '../components/stickyHeader';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="full-height">
        <div className="post--header gradient--blue">
          <StickyHeader />
          <hr className="hr-1" />
          <header className="container">
            <div className="row">
              <div className="col col-offset-2 col-8 mob-col-12 text-center">
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
          <Footer />
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
