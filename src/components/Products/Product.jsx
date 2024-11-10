import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'components/redux/cartSlice';
import ChangeQuantity from 'components/ChangeQuantity/ChangeQuantity';
import productImages from 'data/productsImages';
import {
  ProductWrapper,
  ProductFoto,
  ProductTitle,
  ProductPrice,
  ProductSpecs,
  AddButtonWrapper,
  AddToCartButton,
} from './Products.styled';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { make, model, price, specs, image } = product;

  return (
    <ProductWrapper>
      <ProductFoto src={productImages[image]} alt={`${make} ${model}`} />
      <ProductTitle>
        {make} {model}
      </ProductTitle>
      <ProductPrice>${price}</ProductPrice>
      <ProductSpecs>{specs}</ProductSpecs>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <AddButtonWrapper>
        <AddToCartButton
          onClick={() => {
            dispatch(addItemToCart({ product, quantity }));
          }}
        >
          ADD TO CART
        </AddToCartButton>
      </AddButtonWrapper>
    </ProductWrapper>
  );
};

export default Product;
