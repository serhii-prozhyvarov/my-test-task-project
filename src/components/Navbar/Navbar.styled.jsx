import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-left: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-color);
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  color: var(--navy-blue-dark-color);
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  margin-right: 76px;

  span {
    color: var(--iris-primary-color);
  }
`;

export const MenuNav = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:300px
`;

export const MenuLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--navy-blue-dark-color);
  padding: 24px 0;
  transition: color var(--transition-dur-and-cub);

  &:hover,
  &:focus {
    color: var(--ocean-pressed-state-color);
  }

  &.active {
    color: var(--ocean-pressed-state-color);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--ocean-pressed-state-color);
      border-radius: 2px;
    }
  }
`;

export const ContactMail = styled.a`
  font-size: 16px;
  text-decoration: none;
  font-style:normal;
  color: var(--slate-body-text-color);
  padding: 24px 0;
  margin-right: 40px;
  transition: color var(--transition-dur-and-cub);

  &:hover,
  &:focus {
    color: var(--ocean-pressed-state-color);
  }
`;

export const ContactPhoneNumber = styled.a`
  font-size: 16px;
  text-decoration: none;
  font-style: normal;
  color: var(--slate-body-text-color);
  padding: 24px 0;
  transition: color var(--transition-dur-and-cub);

  &:hover,
  &:focus {
    color: var(--ocean-pressed-state-color);
  }
`;

export const Address = styled.address`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const MobileMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const MobileMenuContainer = styled.div`
  padding: 80px 24px;
`;

export const MobileMenuCloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 16px;
  top: 30px;
  cursor: pointer;

  svg {
    fill: var(--navy-blue-dark-color);
  }
`;

export const MobileMenuNav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const MobileDown = styled.div`
  width: 100%;
`;

export const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const SocialListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--iris-primary-color);
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: var(--ocean-pressed-state-color);
  }
`;
