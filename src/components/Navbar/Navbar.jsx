import React from 'react';
import {
  Header,
  HeaderDiv,
  MobileMenu,
  Logo,
  MobileMenuContainer,
  MobileMenuCloseButton,
  MenuItem,
  Address,
  ContactMail,
  ContactPhoneNumber,
  MobileMenuNav,
  MobileDown,
  MenuNav,
  Nav,
  MenuLink,
} from './Navbar.styled';

import email from '../../images/svg/email.svg'
import phone from '../../images/svg/phone.svg'

const Navbar = () => {
  return (
    <Header>
      <HeaderDiv>
        <Nav>
          <Logo href="/my-test-task-project">
            <span>Web</span>Studio
          </Logo>
          <MenuNav>
            <MenuItem>
              <MenuLink
                to="/my-test-task-project"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Studio
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/portfolio">Portfolio</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/task-management">Task Management</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/shop">Shop</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contacts">Contacts</MenuLink>
            </MenuItem>
          </MenuNav>
        </Nav>
        <Address>
          <ContactMail href="mailto:info@devstudio.com">
            <img src={email} alt="" />
            info@devstudio.com
          </ContactMail>
          <ContactPhoneNumber href="tel:+110001111111">
            <img src={phone} alt="" />
            +11 (000) 111-11-11
          </ContactPhoneNumber>
        </Address>
      </HeaderDiv>
      <MobileMenu data-menu>
        <MobileMenuContainer>
          <MobileMenuCloseButton data-menu-close>
            <svg width="8" height="8">
              <use href="./images/svg/sprite.svg#icon-vector"></use>
            </svg>
          </MobileMenuCloseButton>
          <MobileMenuNav>
            <MenuItem>
              <MenuLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Studio
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/portfolio">Portfolio</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contacts">Contacts</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/task-management">Task Management</MenuLink>
            </MenuItem>
          </MobileMenuNav>
          <MobileDown>
            <Address>
              <ContactPhoneNumber href="tel:+110001111111">
                +11 (000) 111-11-11
              </ContactPhoneNumber>
              <ContactMail href="mailto:info@devstudio.com">
                info@devstudio.com
              </ContactMail>
            </Address>
          </MobileDown>
        </MobileMenuContainer>
      </MobileMenu>
    </Header>
  );
};

export default Navbar;
