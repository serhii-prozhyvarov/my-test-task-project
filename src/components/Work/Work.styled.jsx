import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 96px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 32px;
  text-align: center;
  color: var(--navy-blue-dark-color);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin: 0 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 360px;
`;
