import React from 'react';
import { Container, Title, List, Item, Image } from './Work.styled';

import { workItems } from 'data/workItems';



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
