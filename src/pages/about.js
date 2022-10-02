import React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

export default function About(){
    return (
        <Layout pageTitle="Here's a Page About Myself">
            <p>I'm currently in the process of learning how to use the Gatsby Frameworks</p>
            <StaticImage src="../images/chi-chi.jpg" alt="chi-chi" />
        </Layout>
    )
}

export const Head = () => <title>About Me</title>