import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Image,
  ItemDiv,
  ItemHeader,
  ItemDescription,
  SocialList,
  SocialItem,
  SocialLink,
} from './Team.styled';

import mark from '../../images/staff/product-d.jpg';
import tom from '../../images/staff/front-dev.jpg';
import camila from '../../images/staff/marketing.jpg';
import daniel from '../../images/staff/designer.jpg';

import { ReactComponent as InstagramIcon } from '../../images/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../images/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../images/svg/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../images/svg/linkedin.svg';

const teamMembers = [
  {
    img: mark,
    name: 'Mark Guerrero',
    role: 'Product Designer',
  },
  {
    img: tom,
    name: 'Tom Ford',
    role: 'Frontend Developer',
  },
  {
    img: camila,
    name: 'Camila Garcia',
    role: 'Marketing',
  },
  {
    img: daniel,
    name: 'Daniel Wilson',
    role: 'UI Designer',
  },
];

const Team = () => (
  <Container>
    <Title>Our Team</Title>
    <List>
      {teamMembers.map((member, index) => (
        <Item key={index}>
          <Image src={member.img} alt={member.name} width="264" height="260" />
          <ItemDiv>
            <ItemHeader>{member.name}</ItemHeader>
            <ItemDescription>{member.role}</ItemDescription>
            <SocialList>
              <SocialItem>
                <SocialLink href="#">
                  <InstagramIcon width="18" height="18" />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink href="#">
                  <TwitterIcon width="18" height="18" />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink href="#">
                  <FacebookIcon width="18" height="18" />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink href="#">
                  <LinkedInIcon width="18" height="18" />
                </SocialLink>
              </SocialItem>
            </SocialList>
          </ItemDiv>
        </Item>
      ))}
    </List>
  </Container>
);

export default Team;
