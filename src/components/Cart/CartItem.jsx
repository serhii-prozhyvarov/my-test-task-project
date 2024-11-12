import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../components/redux/cartSlice';
import { CartItemInfo, CartItemWrapper, DeleteIcon } from './Cart.styled';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.productsData);

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  const product = products.find(item => item.id === cartItem.productId);

  if (!product) return null;

  return (
    <CartItemWrapper>
      <CartItemInfo>
        {product.make} {product.model}
      </CartItemInfo>
      <CartItemInfo>{cartItem.quantity} items</CartItemInfo>
      <CartItemInfo>Price: ${product.price * cartItem.quantity}</CartItemInfo>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <DeleteIcon
          className="icon"
          src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
        />
      </span>
    </CartItemWrapper>
  );
};

export default CartItem;
