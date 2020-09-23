import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Languages from "../components/languages";
import Contact from "../components/contact";

const IndexPage = () => {

        return (
            <Layout>
                    <SEO title="Nii Odenkey"/>
                    <Banner/>
                    <About/>
                    <Projects/>
                    <Languages/>
                    <Contact/>
            </Layout>
        )
}


export default IndexPage
