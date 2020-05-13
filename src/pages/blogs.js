import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

export default function Blogs({ data }) {
      console.log(data)
      return (
            <Layout>
                  <SEO title="Home" />
                  <h2>Blogs</h2>
                  {
                        data.allMarkdownRemark.edges.map(blog => (
                              <BlogSort
                                    key={blog.node.id}
                                    path={blog.node.frontmatter.path}
                                    title={blog.node.frontmatter.title}
                                    date={blog.node.frontmatter.date}
                                    author={blog.node.frontmatter.author}
                              />
                        ))
                  }
            </Layout>
      )
}

const BlogSort = ({ path, title, date, author }) => (
      <div style={{ margin: '30px 10px', backgroundColor: '#f0f0f0', padding: 10, borderRadius: 3 }}>
            <h3 style={{ marginBottom: -2 }}>{title}</h3>
            <small>date: {date} & post by: {author}</small>
            <Link to={path}> more...</Link>
      </div>
)

export const BlogsQuery = graphql`
      query BlogIndexQuery {
            allMarkdownRemark {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      date
                      author
                    }
                  }
                }
              }
            
      }
`
