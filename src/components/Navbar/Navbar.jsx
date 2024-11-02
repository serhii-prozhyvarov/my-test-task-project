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

const Navbar = () => {
  return (
    <Header>
      <HeaderDiv>
        <Nav>
          <Logo href="/">
            <span>Web</span>Studio
          </Logo>
          <MenuNav>
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
          </MenuNav>
        </Nav>
        <Address>
          <ContactMail href="mailto:info@devstudio.com">
            info@devstudio.com
          </ContactMail>
          <ContactPhoneNumber href="tel:+110001111111">
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
