import React from 'react';
import {
  PortfolioContainer,
  ButtonsList,
  FilterButton,
  ExamplesList,
  ExamplesItem,
  ExamplesLink,
  ExamplesWrapper,
  ExamplesItemDiv,
  FrequentlyHeader,
  FrequentlyDescription,
} from './Portfolio.styled';


import bankapp from '../../images/portfolio/bank-app.jpg'

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ButtonsList>
        <li>
          <FilterButton type="button">All</FilterButton>
        </li>
        <li>
          <FilterButton type="button">Web Site</FilterButton>
        </li>
        <li>
          <FilterButton type="button">App</FilterButton>
        </li>
        <li>
          <FilterButton type="button">Design</FilterButton>
        </li>
        <li>
          <FilterButton type="button">Marketing</FilterButton>
        </li>
      </ButtonsList>
      <ExamplesList>
        <ExamplesItem>
          <ExamplesLink href="">
            <ExamplesWrapper>
              <img
                src={bankapp}
                alt="bank application"
                width="360"
                height="300"
              />
            </ExamplesWrapper>
            <ExamplesItemDiv>
              <FrequentlyHeader>Banking App Interface Concept</FrequentlyHeader>
              <FrequentlyDescription>App</FrequentlyDescription>
            </ExamplesItemDiv>
          </ExamplesLink>
        </ExamplesItem>
      </ExamplesList>
    </PortfolioContainer>
  );
};

export default Portfolio;
