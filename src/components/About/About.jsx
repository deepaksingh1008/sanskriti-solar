// components/About/About.js
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import aboutImage from '../../assets/s2.jpeg'
const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled(motion.div)`
  max-width: 600px;
  margin: 2rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  max-width: 400px;
  margin: 2rem;
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <AboutContainer id="about">
      <Heading>About Us</Heading>
      <Content>
        <TextContainer
          ref={ref}
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h1>
            Sanskriti Solar Power
          </h1>
          <p>
            With a commitment to excellence and a passion for renewable energy, we strive to help our customers reduce their carbon footprint while saving on energy costs.
          </p>
        </TextContainer>
        <ImageContainer
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <Image src={aboutImage} alt="About" />
        </ImageContainer>
      </Content>
    </AboutContainer>
  );
};

export default About;