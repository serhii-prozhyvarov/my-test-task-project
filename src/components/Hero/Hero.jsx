import React, { useState } from 'react';
import {
  HeroContainer,
  HeroTitle,
  ModalButton,
  Backdrop,
  Modal,
  CloseButton,
  FormField,
  InputDescription,
  InputWrapper,
  Input,
  Textarea,
  SubmitButton,
  Paragraph,
} from './Hero.styled';

import { ReactComponent as CloseIcon } from '../../images/svg/vector.svg'; 
const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <HeroContainer>
        <HeroTitle>Effective Solutions for Your Business</HeroTitle>
        <ModalButton type="button" onClick={openModal}>
          Order Service
        </ModalButton>
      </HeroContainer>

      {isModalOpen && (
        <Backdrop>
          <Modal>
            <CloseButton type="button" onClick={closeModal}>
              <CloseIcon width="16" height="16" />
            </CloseButton>
            <Paragraph className="modal-form-name">
              Leave your contacts and we will call you back
            </Paragraph>
            <form className="modal-form">
              <FormField>
                <InputDescription>Name</InputDescription>
                <InputWrapper>
                  <Input type="text" name="user_name" />
                </InputWrapper>
              </FormField>
              <FormField>
                <InputDescription>Phone</InputDescription>
                <InputWrapper>
                  <Input
                    type="tel"
                    name="user_phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    title="xxx-xxx-xx-xx"
                  />
                </InputWrapper>
              </FormField>
              <FormField>
                <InputDescription>Email</InputDescription>
                <InputWrapper>
                  <Input type="email" name="user_email" />
                </InputWrapper>
              </FormField>
              <FormField>
                <InputDescription>Comment</InputDescription>
                <Textarea name="user_message" placeholder="Text input" />
              </FormField>
              <input
                id="form_policy"
                type="checkbox"
                className="modal-form-input-policy visually-hidden"
              />
              <Paragraph htmlFor="form_policy" className="modal-form-field-policy">
                I accept the terms and conditions of the &nbsp;
                <a href="/">Privacy Policy</a>
              </Paragraph>
              <SubmitButton type="submit">Send</SubmitButton>
            </form>
          </Modal>
        </Backdrop>
      )}
    </>
  );
};

export default HeroSection;
