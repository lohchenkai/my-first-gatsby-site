import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function BlogPost() {
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>Blog Post Content is gonna be here eventually.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />