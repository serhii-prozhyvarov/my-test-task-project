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

import antenna from '../../images/svg/antenna.svg';
import clock from '../../images/svg/clock.svg';
import diagram from '../../images/svg/diagram.svg';
import astronaut from '../../images/svg/astronaut.svg';

const benefitsData = [
  {
    icon: antenna,
    title: 'Strategy',
    description:
      'Our goal is to identify the business problem to walk away with the perfect and creative solution.',
  },
  {
    icon: clock,
    title: 'Punctuality',
    description:
      "Bring the key message to the brand's audience for the best price within the shortest possible time.",
  },
  {
    icon: diagram,
    title: 'Diligence',
    description:
      'Research and confirm brands that present the strongest digital growth opportunities and minimize risk.',
  },
  {
    icon: astronaut,
    title: 'Technologies',
    description:
      'Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.',
  },
];

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
