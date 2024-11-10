import {
  ChangeQuantityWrapper,
  AddButton,
  RemoveButton,
  Span,
} from './ChangeQuantity.styled';

const ChangeQuantity = ({ setQuantity, quantity }) => {
  const addQuantity = () => {
    return setQuantity(quantity + 1);
  };
  const removeQuantity = () => {
    if (quantity < 1) return true;
    return setQuantity(quantity - 1);
  };
  return (
    <ChangeQuantityWrapper>
      <AddButton onClick={addQuantity}>+</AddButton>
      <Span>{quantity}</Span>
      <RemoveButton onClick={removeQuantity}>-</RemoveButton>
    </ChangeQuantityWrapper>
  );
};

export default ChangeQuantity;
