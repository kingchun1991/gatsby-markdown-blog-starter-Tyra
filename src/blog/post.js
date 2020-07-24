import React from 'react';
import Layout from '../common/layouts';
import Hero from './components/hero.js';
import Body from './components/body.js';
import Seo from './seo.js';
import MetaSeo from '../common/seo';
import { graphql } from 'gatsby';
import {MDXProvider} from '@mdx-js/react'
import * as shortcodes from '@blocks/kit'

export default ({location, data }) => {
  const {
    category,
    date,
    dateOriginal,
    author,
    title,
    slug,
    metaDescription
  } = data.post.frontmatter;

  const content = data.post.body;
  const toc = data.post.tableOfContents
  return (
    <Layout>
      <Seo
        slug={slug}
        title={title}
        date={dateOriginal}
        description={metaDescription}
        author={author}
        image={data.post.frontmatter.featured.childImageSharp.original.src} />
      <MetaSeo
        title={title}
        description={metaDescription}
        image={data.post.frontmatter.featured.childImageSharp.resize} />
      <Hero author={author} date={date} category={category} title={title} />
      <MDXProvider components={shortcodes}>
        <Body
          content={content}
          description={metaDescription}
          image={data.post.frontmatter.featured.childImageSharp.original.src}
          location={location}
          headings={toc}
        />
      </MDXProvider>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    post: mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      tableOfContents
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        dateOriginal: date
        category
        author
        title
        metaDescription
        slug
        featured {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
    date: mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date
      }
    }
  }
`
