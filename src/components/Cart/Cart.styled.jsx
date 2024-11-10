import styled from '@emotion/styled';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 330px;
  border-radius: 40px;

  background-color: #eae4ec;
`;
export const Icon = styled.img`
  width: 50px;
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
  border: solid 3px #000000;
  border-radius: 30px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const TotalHeader = styled.h2`
  text-align: center;
`;

export const CartItemInfo = styled.h2`
  font-size: 18px;
`;
export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 3px #000000;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 10px;
`;
