import React, {useEffect, useRef, useState} from 'react';
import {gsap, ScrollTrigger} from "gsap/all";
import emailjs from 'emailjs-com';


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
    let hello = useRef(null);
    let form = useRef(null);

    const [mailDetails, setMailDetails] = useState(
        {
            name: '',
            email: '',
            message: '',
        }
    )



    const handleMailChange = e => {
        if (e.target.name === 'name') {
            setMailDetails({...mailDetails, name: e.target.value});
        } else if (e.target.name === 'email') {
            setMailDetails({...mailDetails, email: e.target.value});
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

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_rj1z9eu', e.target, 'user_Z47eoUWQ39fcs9dvKU5m6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
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
                    <form onSubmit={handleSubmit} ref={form}>
                        <Grid num='2' gap='40px'>
                            <Label>
                                Name <br/>
                                <Input type='text' placeholder='Enter full name' name='name'
                                       onChange={handleMailChange}/>
                            </Label>
                            <Label>
                                Email<br/>
                                <Input type='email' placeholder='Enter your email' name='email'
                                       onChange={handleMailChange}/>
                            </Label>
                        </Grid>
                        <Label>
                            Message
                            <TextArea rows="6" cols="50" placeholder='How can I help you?' name='message'
                                      onChange={handleMailChange}/>
                        </Label>
                        <FormButton>Mail me</FormButton>
                    </form>
                </Grid>
            </Container>

        </FooterWrapper>
    );
};

export default Contact;
