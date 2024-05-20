import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo2.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: #333;
    padding: 1rem;
    margin: 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} alt="" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
      </Logo>
      <NavLinks isOpen={isOpen}>
        <li>
          <NavLink to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="blog" smooth={true} duration={500} onClick={toggleMenu}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </li>
      </NavLinks>
      <MobileMenuToggle onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuToggle>
    </NavbarContainer>
  );
};

export default Navbar;