import Cart from "components/Cart/Cart";
import Filter from "components/Filter/Filter";
import Products from "components/Products/Products";
import { CartWrapper, ContentWrapper, Wrapper } from "./Shop.styled";

const Shop = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Filter />
        <Products />
      </ContentWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
};

export default Shop;
