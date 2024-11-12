import styled from '@emotion/styled';

const primaryColor = '#f7f2f9';
const borderColor = '#000000';
const borderRadius = '15px';
const paddingSize = '20px';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 330px;
  border-radius: 40px;
  background-color: ${primaryColor};

`;

export const Icon = styled.img`
  width: 40px;
`;

export const DeleteIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const CartHeader = styled.h2`
  text-align: center;
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 3px ${borderColor};
  border-radius: 30px;
  padding: 5px 20px;
`;

export const TotalHeader = styled.h2`
  text-align: center;
`;

export const CartItemInfo = styled.h2`
  margin-top: 0px;
  font-size: 18px;
  text-align: center;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 3px ${borderColor};
  border-radius: ${borderRadius};
  padding: ${paddingSize};
  margin-bottom: 10px;

width: 220px;
`;
