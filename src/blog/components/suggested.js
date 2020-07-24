import React from 'react';
import EmailForm from './emailForm.js';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import 'tachyons';


export default props => (
  <div className="flex flex-column justify-end items-center pa2" style={{gridArea: "suggested"}}>
    <span className="sans-serif tracked ttu tc db pv3">CONTINUE READING</span>
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            limit: 2,
            sort: {order: DESC, fields: frontmatter___date},
            filter: {frontmatter: {type: {eq: "post"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                  metaDescription
                  featured {
                    childImageSharp {
                      fluid(maxWidth: 720) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }  
      `}
      render={data => data.allMdx.edges.map(({ node }) => (
        <div className="w-100 mw6 tc mb4">
          <Link to={node.frontmatter.slug}>
            <Img
              className="h5"
              fluid={node.frontmatter.featured.childImageSharp.fluid}
              alt={node.frontmatter.metaDescription} />
          </Link>
          <Link
            className="f4 serif tc dib pv2 ph3 display dark-gray no-underline"
            to={node.frontmatter.slug}>
            {node.frontmatter.title}
          </Link>
        </div>
      ))} />
    <EmailForm />
  </div>
)
