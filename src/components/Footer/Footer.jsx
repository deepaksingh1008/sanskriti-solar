// components/Footer/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    margin: 0.5rem;
  }

  &:hover {
    color: #ccc;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;





const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
      </SocialIcons>
      <Copyright>&copy; {new Date().getFullYear()} Solar Panel Co. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;