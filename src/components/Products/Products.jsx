import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from 'components/redux/productsSlice';
import Product from './Product';
import { ProductsWrapper } from './Products.styled';
import { productsData } from 'data/productsData';

const Products = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <ProductsWrapper>
      {productsData
        .filter(product => {
          if (selectedCategory === 'ALL') return true;
          return selectedCategory === product.make.toUpperCase();
        })
        .map(product => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
    </ProductsWrapper>
  );
};

export default Products;
