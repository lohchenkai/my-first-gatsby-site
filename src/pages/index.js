// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to My Gatsby Site">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://images.unsplash.com/photo-1589210043112-d4835d91b37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="shih-tzu" />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage