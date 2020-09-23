import React, {useEffect, useRef, useState} from 'react';
import {gsap, ScrollTrigger} from "gsap/all";
import emailjs from 'emailjs-com';


//Styled components
import {ErrorParagraph, FooterWrapper, FormButton, FormGrid, Input, Label, TextArea} from "../styles/contactStyles";
import {
    Container,
    Flex,
    Grid,
    HeaderFive,
    HeaderTwo,
} from "../styles/globalStyles";
import {errorObject, validateEMail, validateForm, validateName} from "../utils/validation";


const Contact = ({showSuccessModal, showFailedModal}) => {
    let hello = useRef(null);
    let form = useRef(null);


    const [formError, setFormError] = useState({
        nameError: '',
        emailError: '',
        messageError: '',
    })

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setFormError({...formError, [error]: message});
    };

    const handleNameChange = e => {
        validateName(e.target, 'nameError');
        setError();
    }

    const handleMailChange = e => {
        validateEMail(e.target, 'emailError');
        setError();
    }

    const handleMessageChange = e => {
        validateName(e.target, 'messageError');
        setError();
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
        const isValid = validateForm(e);
        setError();

        if(isValid) {
            emailjs.sendForm('gmail', 'template_rj1z9eu', e.target, 'user_Z47eoUWQ39fcs9dvKU5m6')
                .then((result) => {
                    console.log(result.text);
                    showSuccessModal();
                }, (error) => {
                    console.log(error.text);
                    showFailedModal();
                });
            e.target.reset();
        }
    }


    return (
        <FooterWrapper id='contact'>
            <Container>
                <Grid num={['1fr 1fr']}>
                    <div ref={hello}>
                        <Flex>
                            <HeaderTwo>Say hello!</HeaderTwo>
                            <HeaderTwo className='hand'><span role='img'
                                                              aria-label='wave'>👋🏽</span></HeaderTwo></Flex>
                        <HeaderFive>Whether you want to discuss a new project or grab a cup of coffee, I’d love to talk
                            to
                            you. Feel free to reach out to me.</HeaderFive>
                    </div>
                    <form onSubmit={handleSubmit} ref={form}>
                        <FormGrid num='2' gap='40px' gapPhone='0'>
                            <Label>
                                Name <br/>
                                <Input type='text' placeholder='Enter full name' name='name'
                                       onChange={handleNameChange} onBlur={handleNameChange}/>
                                <ErrorParagraph>{formError.nameError}</ErrorParagraph>
                            </Label>
                            <Label>
                                Email<br/>
                                <Input type='email' placeholder='Enter your email' name='email'
                                       onChange={handleMailChange} onBlur={handleMailChange}/>
                                <ErrorParagraph>{formError.emailError}</ErrorParagraph>
                            </Label>
                        </FormGrid>
                        <Label>
                            Message
                            <TextArea rows="6" cols="50" placeholder='How can I help you?' name='message'
                                      onChange={handleMessageChange} onBlur={handleMessageChange}/>
                            <ErrorParagraph>{formError.messageError}</ErrorParagraph>
                        </Label>
                        <FormButton>Mail me</FormButton>
                    </form>
                </Grid>
            </Container>

        </FooterWrapper>
    );
};

export default Contact;
