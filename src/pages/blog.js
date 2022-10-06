import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export default function Blog({ data }) {
  const blogList = data.allFile.nodes.map((blogName, index) => (
    <h3 key={index}>{blogName.name}</h3>
  ));

  return (
    <Layout pageTitle="My Blog Posts">
      <h2>A List Of My Blog Post</h2>
      {blogList}
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
