import React, {useEffect, useRef, useState} from 'react';
import {gsap, ScrollTrigger} from "gsap/all";


//Styled components
import {FooterWrapper, FormButton, Input, Label, TextArea} from "./styles/contactStyles";
import {
    Container,
    Flex,
    Grid,
    HeaderFive,
    HeaderTwo,
} from "./styles/globalStyles";



const Contact = () => {
    let combineName = useRef(null);
    let hello = useRef(null);
    let form = useRef(null);

    const [finalMail, setFinalMail] = useState('');

    const [mailDetails, setMailDetails] = useState(
        {
            name: '',
            subject: '',
            message: '',
            combine: 'mailto:abbeyniiodenkey@gmail.com',
        }
    )



    const handleMailChange = e => {
        if (e.target.name === 'user') {
            setMailDetails({...mailDetails, name: e.target.value});
        } else if (e.target.name === 'subject') {
            setMailDetails({...mailDetails, subject: e.target.value});
        } else if (e.target.name === 'message') {
            setMailDetails({...mailDetails, message: e.target.value});
        }
    }


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(hello.current, {
            scrollTrigger: {
                trigger: hello.current,
                start: 'top center',
            },
            duration: 1,
            opacity: 0,
            x: -200
        });
        gsap.from(form.current, {
                    scrollTrigger: {
                        trigger: hello.current,
                        start: 'top center',
                    },
                    duration: 1,
                    opacity: 0,
                    x: 200
                });

        if ( window.history.replaceState ) {
            window.history.replaceState( null, null, window.location.href );
        }


        combineName.current = `mailto:abbeyniiodenkey@gmail.com?subject=${mailDetails.subject}&body=${mailDetails.message}%0D%0ARegards,%20${mailDetails.name}`;
        combineName.current = combineName.current.replace(/ /g, '%20')
        setFinalMail(combineName.current);
    }, [mailDetails]);

    const handleSubmit = () => {
        const a = document.createElement('a');
        a.target="_blank";
        a.rel="noreferrer noopener";
        a.href=finalMail;
        a.click();
    }




    return (
        <FooterWrapper id='contact'>
            <Container>
                <Grid num={['1fr 1fr']}>
                    <div ref={hello}>
                        <Flex>
                            <HeaderTwo>Say hello!</HeaderTwo>
                            <HeaderTwo className='hand'><span role='img' aria-label='wave'>👋🏽</span></HeaderTwo></Flex>
                        <HeaderFive>Whether you want to discuss a new project or grab a cup of coffee, I’d love to talk
                            to
                            you. Feel free to reach out to me.</HeaderFive>
                    </div>
                    <form method="POST" ref={form}>
                        <Grid num='2' gap='40px'>
                            <Label>
                                Name <br/>
                                <Input type='text' placeholder='Enter full name' name='user'
                                       onChange={handleMailChange}/>
                            </Label>
                            <Label>
                                Subject<br/>
                                <Input type='text' placeholder='Enter your email subject' name='subject'
                                       onChange={handleMailChange}/>
                            </Label>
                        </Grid>
                        <Label>
                            Message
                            <TextArea rows="4" cols="50" placeholder='How can I help you?' name='message'
                                      onChange={handleMailChange}/>
                        </Label>
                        <FormButton onClick={handleSubmit}>Mail me</FormButton>
                    </form>
                </Grid>
            </Container>

        </FooterWrapper>
    );
};

export default Contact;
