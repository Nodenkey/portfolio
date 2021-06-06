import React, {useEffect, useRef} from 'react';
import Img from "gatsby-image";
import {graphql,useStaticQuery} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {gsap, ScrollTrigger, Power3} from "gsap/all";

//Styled components
import {Container, HeaderFour, HeaderThree, Paragraph} from "../styles/globalStyles";
import {
    AllProjectContainer,
    ProjectContainer, ProjectImage,
    ProjectWrapper,
    TextSection,
    VisitWebsite
} from "../styles/projectStyles";
import {projects} from "../utils/projectFiles";


const Projects = ({onCursor}) => {
    let projectTitle = useRef(null);

    useEffect(() => {
        const projectImages = document.querySelectorAll('.project-image');
        gsap.registerPlugin(ScrollTrigger);
        projectImages.forEach(image => {
          gsap.to(image, {
              scrollTrigger: {
                  trigger: image,
              },
              duration: 1,
              scale: 1.1,
              ease: Power3.easeInOut
          })
        })
    }, [])


    const projectImages = useStaticQuery(graphql`
    query {
        wevops: file(relativePath: {eq: "images/wevops.png"}) {
            id
            childImageSharp {
            fluid(maxWidth: 5000) {
                ...GatsbyImageSharpFluid
        }
    }
  }
       edanra: file(relativePath: {eq: "images/edanra.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }            
      qube: file(relativePath: {eq: "images/qube_pcs.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }           
       evodia: file(relativePath: {eq: "images/evodia.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }  
       fr: file(relativePath: {eq: "images/fr_logistics.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }           
      design: file(relativePath: {eq: "images/design_studios.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }            
      chop: file(relativePath: {eq: "images/chop_flix.png"}) {
                id
                childImageSharp {
                fluid(maxWidth: 5000) {
                    ...GatsbyImageSharpFluid
          }
        }
      }
}  
    `)

    return (
        <ProjectWrapper id='projects'>
            <Container><HeaderThree ref={projectTitle} style={{marginBottom: 50}}>Selected
                projects</HeaderThree></Container>
            <AllProjectContainer>
            {
                projects.map(project =>
                    <ProjectContainer key={project.key}>
                        <TextSection color={project.backgroundColor} textColor={project.textColor}>
                            <HeaderFour style={{
                                textTransform: 'capitalize',
                                color: `${project.headerColor}`
                            }}>{project.name}</HeaderFour>
                            <Paragraph>{project.description}</Paragraph>
                            <a href={project.site} rel='noopener noreferrer' target='_blank'><VisitWebsite
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                            >
                                <HeaderFour>visit website</HeaderFour>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </VisitWebsite>
                            </a>
                        </TextSection>
                        <ProjectImage><Img fluid={projectImages[project.image].childImageSharp.fluid} className='project-image'/></ProjectImage>
                    </ProjectContainer>
                )
            }
            </AllProjectContainer>
        </ProjectWrapper>
    );
};

export default Projects;
