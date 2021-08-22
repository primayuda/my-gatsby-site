// Step 1 : import React
import * as React from 'react';
import Layout from '../components/layout';

// Step 2 : define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there, I'm a proud creator of this webpage, which I created using Gatsby.</p>
        </Layout>
    )
}

// Step 3 : export your component
export default AboutPage