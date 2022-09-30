import React from "react"
import Layout from '../components/layout'

export default function About(){
    return (
        <Layout pageTitle="Here's a Page About Myself">
            <p>I'm currently in the process of learning how to use the Gatsby Frameworks</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>