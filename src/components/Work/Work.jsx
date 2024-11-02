import React from 'react';
import { Container, Title, List, Item, Image } from './Work.styled';

import desktop from '../../images/benefits/desktop.jpg';
import mobileApp from '../../images/benefits/mobapp.jpg';
import design from '../../images/benefits/design.jpg';

const workItems = [
  {
    src: desktop,
    alt: 'desktop application',
  },
  {
    src: mobileApp,
    alt: 'mobile application',
  },
  {
    src: design,
    alt: 'design for your product',
  },
];

const Work = () => (
  <Container>
    <Title>What are we doing</Title>
    <List>
      {workItems.map((item, index) => (
        <Item key={index}>
          <Image src={item.src} alt={item.alt} width="360" height="300" />
        </Item>
      ))}
    </List>
  </Container>
);

export default Work;
