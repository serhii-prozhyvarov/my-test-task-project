import styled from '@emotion/styled';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

export const ProductWrapper = styled.div`
  width: 350px;
  border: 2px solid #ddd;
  border-radius: 30px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ProductFoto = styled.img`
  width: 200px;
  height: 150px;
  object-fit: contain;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const ProductSpecs = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 10px 0;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  padding: 8px 16px;
  text-align: center;
  letter-spacing: 0.04em;
  background: var(--ocean-pressed-state-color);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--corn-flower-accent-color);
  transition: color var(--transition-dur-and-cub),
    background var(--transition-dur-and-cub),
    box-shadow var(--transition-dur-and-cub);

  &:hover,
  &:focus {
    color: var(--clean-white);
    background: var(--green-success-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
