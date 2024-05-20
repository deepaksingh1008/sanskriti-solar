// components/Contact/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #555;
  }
`;

const Message = styled(motion.div)`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically send the form data to a server using an API
        // For this example, we'll simulate a successful submission
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <ContactContainer id="contact">
            <Heading>Get in Touch</Heading>
            <Form onSubmit={handleSubmit} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextArea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <Button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Submit
                </Button>
                {submissionStatus === 'success' && (
                    <Message
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Thank you for your message!
                    </Message>
                )}
            </Form>
        </ContactContainer>
    );
};

export default Contact;