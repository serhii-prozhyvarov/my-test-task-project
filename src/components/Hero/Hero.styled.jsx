import styled from '@emotion/styled';

import hero from '../../images/hero/bg-desktop.jpg';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(46, 47, 66, 0.7);
    z-index: 1;
  }
`;

export const HeroTitle = styled.h1`
  min-width: 260px;
  max-width: 320px;
  font-size: 36px;
  line-height: 1.11;
  text-align: center;
  color: var(--clean-white);
  margin-bottom: 72px;
  position: relative;
  z-index: 2;
`;

export const ModalButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 16px 32px;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  background: var(--iris-primary-color);
  color: var(--clean-white);
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: background 0.3s;
  position: relative;
  z-index: 2;
  transition: background var(--transition-dur-and-cub),
    transform var(--transition-dur-and-cub);

  &:hover {
    background: var(--ocean-pressed-state-color);
    transform: scale(1.05);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 8px;
  padding: 25px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--iris-primary-color);
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const InputDescription = styled.span`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid var(--iris-primary-color);
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid var(--iris-primary-color);
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background: var(--iris-primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: var(--ocean-pressed-state-color);
  }
`;

export const Paragraph = styled.p`
padding:10px;
`

