import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from 'components/redux/cartSlice';
import {
  CartHeader,
  CartWrapper,
  HeadWrapper,
  Icon,
  TotalHeader,
} from './Cart.styled';
import cartIcon from '../../images/svg/cart.svg';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <CartWrapper>
      <HeadWrapper>
        <CartHeader>My cart</CartHeader>
        <Icon src={cartIcon} />
      </HeadWrapper>
      {cartItems.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <TotalHeader>Total: ${totalPrice}</TotalHeader>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </>
      )}
    </CartWrapper>
  );
};

export default Cart;
