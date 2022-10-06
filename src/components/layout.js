import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, nav, siteTitle } from "./layout.module.css";

export default function Layout(props) {
  const webTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <header className={siteTitle}>{webTitle.site.siteMetadata.title}</header>
      <nav>
        <ul className={nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog Posts</Link>
          </li>
        </ul>
      </nav>
      <main className={container}>
        <h1>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  );
}
