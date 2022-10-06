import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {props.title} | {data.site.siteMetadata.title}
    </title>
  );
}
