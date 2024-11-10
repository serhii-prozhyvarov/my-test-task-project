import {
  CartHeader,
  CartWrapper,
  HeadWrapper,
  Icon,
  TotalHeader,
} from './Cart.styled';
import cartIcon from '../../images/svg/cart.svg';
import { getCartItems, getTotalPrice } from 'components/redux/cartSlice';
import { useSelector } from 'react-redux';
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
      <TotalHeader>Total: ${totalPrice}</TotalHeader>
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
    </CartWrapper>
  );
};

export default Cart;
