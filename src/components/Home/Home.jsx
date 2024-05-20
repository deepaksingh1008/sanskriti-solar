// components/Home/Home.js
import React from 'react';
import styled from 'styled-components';
import solarVideo from '../../assets/solar_video.mp4';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const VideoBackground = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.7rem;
  text-align: center;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 500px;
  }
`;
const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;
const Home = () => {
  return (
    <HomeContainer id="home">
      <VideoBackground autoPlay loop muted>
        <source src={solarVideo} type="video/mp4" />
      </VideoBackground>
      <Overlay>
        <Heading>Sanskriti Solar Power</Heading>
        <Description>
          REGISTERED SUBSIDY VENDOR !
        </Description>
        <Button>Connect Us Now !</Button>
      </Overlay>
    </HomeContainer>
  );
};

export default Home;