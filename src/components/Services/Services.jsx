// components/Services/Services.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import image1 from '../../assets/WhatsApp Image 2024-05-17 at 19.11.11.jpeg'
import image2 from '../../assets/s3.jpeg'
import image3 from '../../assets/s4.jpeg'
const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Icon = styled.img`
  width: 100%;
  height: 60%;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
// components/Services/Services.js (continued)
const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ServicesContainer id="services">
      <Heading>Our Services</Heading>
      <ServiceCards>
        <ServiceCard variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Icon src={image1} alt="Service Icon" />
          <Title>Residential Solar Installations</Title>
          <Description>
            We offer custom solar panel installations for homes, ensuring efficient and cost-effective energy solutions.
          </Description>
        </ServiceCard>
        <ServiceCard variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Icon src={image2} alt="Service Icon" />
          <Title>Commercial Solar Solutions</Title>
          <Description>
            Our commercial solar solutions are designed to meet the energy demands of businesses and reduce operating costs.
          </Description>
        </ServiceCard>
        <ServiceCard variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Icon src={image3} alt="Service Icon" />
          <Title>Solar Panel Maintenance</Title>
          <Description>
            We offer comprehensive maintenance services to ensure your solar panels operate at peak efficiency.
          </Description>
        </ServiceCard>
      </ServiceCards>
    </ServicesContainer>
  );
};

export default Services;