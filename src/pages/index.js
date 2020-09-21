import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Languages from "../components/languages";
import Contact from "../components/contact";
import MenuOverlay from "../components/menuOverlay";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {

        return (
            <Layout>
                    <SEO title="Nii Odenkey"/>
                    <MenuOverlay/>
                    <Header/>
                    <Banner/>
                    <About/>
                    <Projects/>
                    <Languages/>
                    <Contact/>
                    <Footer/>
            </Layout>
        )
}


export default IndexPage
