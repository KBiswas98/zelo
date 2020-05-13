import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogTemplate = ({ data }) => {
      const blog = data.markdownRemark

      return (
            <Layout>
                  <Link to='/blogs'> {`< Back`} </Link>
                  <br />
                  <br />
                  <h1> {blog.frontmatter.title}</h1>
                  <h5>post by {blog.frontmatter.author}    date: {blog.frontmatter.date}</h5>
                  <div dangerouslySetInnerHTML={{ __html: blog.html }}>
                  </div>
            </Layout>
      )
}

export const BlogQuery = graphql`
      query BlogPostByPath($path: String!) {
            markdownRemark(frontmatter: { path: {eq: $path}}) {
                  html
                  frontmatter {
                        path
                        title
                        date
                        author
                  }
            }
      }
`


export default BlogTemplate
