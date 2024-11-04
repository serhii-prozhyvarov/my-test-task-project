import styled from '@emotion/styled';

export const FooterDiv = styled.div`
  background: var(--navy-blue-dark-color);
  padding: 80px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 108px;
  margin: 0 auto;
`;

export const DescriptionFooter = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--corn-flower-accent-color);
`;

export const FooterLogo = styled.a`
  font-family: var(--secondary-font);
  color: var(--cloud-light-mode-color);
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 24px;

  span {
    color: var(--iris-primary-color);
  }
`;

export const HeaderSocialListFooter = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: var(--clean-white);
  
`;

export const SocialFooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: background-color var(--transition-dur-and-cub),
    transform var(--transition-dur-and-cub);

  &:hover {
    background-color: var(--green-success-color);
    transform: scale(1.1);
  }
`;

export const FooterDivRightName = styled.p`
  margin: 0 0 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: var(--clean-white);
`;

export const FooterForm = styled.form`
  display: flex;
  align-items: center; 
`;

export const FooterFormInput = styled.input`
  width: 264px;
  min-height: 30px;
  padding: 8px 16px;
  margin-right: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  color: var(--cloud-light-mode-color);
  transition: border-color var(--transition-dur-and-cub);

  &:focus {
    outline: none;
    border-color: var(--iris-primary-color);
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const FooterFormSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 165px;
  min-height: 25px;
  padding: 8px 24px;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  background: var(--iris-primary-color);
  color: var(--clean-white);
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: background var(--transition-dur-and-cub),
    transform var(--transition-dur-and-cub);

  &:hover {
    background: var(--ocean-pressed-state-color);
    transform: scale(1.05);
  }
`;

export const SocialListFooter = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  list-style-type: none;
  margin: 0;
`;

export const FooterItem = styled.div`
  height:150px;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
`;
