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

import { ReactComponent as InstagramIcon } from '../../images/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../images/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../images/svg/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../images/svg/linkedin.svg';

import { teamMembers } from 'data/teamMembers';

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
