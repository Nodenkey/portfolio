import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Languages from "../components/languages";
import Contact from "../components/contact";
import BlogSection from "../components/blogSection";

const IndexPage = () => {

        return (
            <Layout>
                    <SEO title="Nii Odenkey"/>
                    <Banner/>
                    <About/>
                    <Projects/>
                    <Languages/>
                    <BlogSection/>
                    <Contact/>
            </Layout>
        )
}


export default IndexPage
