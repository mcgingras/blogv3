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
        <div className="post--header">
          <StickyHeader />
          <hr className="hr-1" />
          <header className="container blog--header">
            <div className="row">
              <div className="col col-4 col-offset-1 mob-col-0">
              </div>
              <div className="col col-6 mob-col-12">
              <h2 className="blog--title">{post.frontmatter.title}</h2>
              <p className="blog--subtitle">{post.frontmatter.subtitle}</p>
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
