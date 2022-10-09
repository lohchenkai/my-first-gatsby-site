import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export default function Blog({ data }) {
  const blogList = data.allMdx.nodes.map( blog => (
    <article key={blog.id}>
      <h2>{blog.frontmatter.title}</h2>
      <h5>Posted: {blog.frontmatter.date}</h5>
      <p>{blog.excerpt}</p>
    </article>
  ));

  return (
    <Layout pageTitle="My Blog Posts">
      {blogList}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
