import styled from '@emotion/styled';

export const Container = styled.div`
  background: var(--cloud-light-mode-color);
  padding-top: 36px;
  padding-bottom: 96px;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 36px;
  font-size: 36px;
  line-height: 1.11;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  row-gap: 72px;
`;

export const Item = styled.li`
  margin-left: auto;
  margin-right: auto;
  background: var(--clean-white);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemDiv = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export const ItemHeader = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  margin:0px;
  color: var(--navy-blue-dark-color);
`;

export const ItemDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 8px;
  color: var(--slate-body-text-color);
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 0px;
`;

export const SocialItem = styled.li`
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
border-radius:50%;
width:35px;
height: 35px;
`;

export const SocialLink = styled.a``;

export const SocialIcon = styled.svg``;
