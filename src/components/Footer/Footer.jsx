import React from 'react';
import {
  FooterDiv,
  Container,
  DescriptionFooter,
  FooterLogo,
  HeaderSocialListFooter,
  SocialFooterLink,
  FooterDivRightName,
  FooterForm,
  FooterFormInput,
  FooterFormSubmit,
  SocialListFooter,
  FooterItem,
} from './Footer.styled.jsx';

import sprite from '../../images/svg/sprite.svg';

const Footer = () => {
  return (
    <FooterDiv>
      <Container className="container">
        <FooterItem>
          <FooterLogo href="./index.html">
            <span className="logo-web">Web</span>Studio
          </FooterLogo>
          <DescriptionFooter>
            Increase the flow of customers and sales for your business with
            digital marketing & growth solutions.
          </DescriptionFooter>
        </FooterItem>
        <FooterItem>
          <HeaderSocialListFooter>Social Media</HeaderSocialListFooter>
          <SocialListFooter>
            <li>
              <SocialFooterLink href="">
                <svg className="social-list-icon" width="24" height="24">
                  <use href={`${sprite}#icon-instagram`} />
                </svg>
              </SocialFooterLink>
            </li>
            <li>
              <SocialFooterLink href="">
                <svg className="social-list-icon" width="24" height="24">
                  <use href={`${sprite}#icon-twitter`} />
                </svg>
              </SocialFooterLink>
            </li>
            <li>
              <SocialFooterLink href="">
                <svg className="social-list-icon" width="24" height="24">
                  <use href={`${sprite}#icon-facebook`} />
                </svg>
              </SocialFooterLink>
            </li>
            <li>
              <SocialFooterLink href="">
                <svg className="social-list-icon" width="24" height="24">
                  <use href={`${sprite}#icon-linkedin`} />
                </svg>
              </SocialFooterLink>
            </li>
          </SocialListFooter>
        </FooterItem>
        <FooterItem>
          <FooterDivRightName>Subscribe</FooterDivRightName>
          <FooterForm>
            <FooterFormInput
              type="email"
              name="user_email"
              placeholder="E-mail"
            />
            <FooterFormSubmit type="submit">
              Subscribe
              <svg
                width="24"
                height="24"
                style={{marginLeft:'10px'}}
              >
                <use href={`${sprite}#icon-frame`} />
              </svg>
            </FooterFormSubmit>
          </FooterForm>
        </FooterItem>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
