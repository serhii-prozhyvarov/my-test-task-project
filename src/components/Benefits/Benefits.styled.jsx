import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 96px;
`;

export const Title = styled.h2`
  display: none;
`;

export const List = styled.ul`
display:flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 72px;
    margin-right: 30px;
  }
`;

export const IconWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 150px;
  width:300px;
  border-radius:10px;
  margin-bottom: 16px; 
  background-color: #d7e5ea;
  `


export const Header = styled.h3`
  font-size: 26px;
  line-height: 1.11;
  margin-bottom: 8px;
  text-align: center;
  text-transform: capitalize;
  color: var(--navy-blue-dark-color);
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--slate-body-text-color);
`;
