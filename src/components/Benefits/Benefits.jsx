import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  IconWrapper,
  Header,
  Paragraph,
} from './Benefits.styled';
import { benefitsData } from 'data/benefitData';


const Benefits = () => (
  <Container>
    <Title>Benefits</Title>
    <List>
      {benefitsData.map((benefit, index) => (
        <Item key={index}>
          <IconWrapper>
            <img
              src={benefit.icon}
              alt={`${benefit.title} icon`}
              width="96"
              height="96"
            />
          </IconWrapper>
          <Header>{benefit.title}</Header>
          <Paragraph>{benefit.description}</Paragraph>
        </Item>
      ))}
    </List>
  </Container>
);

export default Benefits;
