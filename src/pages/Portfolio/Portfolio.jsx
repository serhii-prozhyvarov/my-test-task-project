import React, { useState } from 'react';
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

import { examples } from '../../examples';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');   

  const handleFilterChange = filterType => {
    setFilter(filterType);
  };

  const filteredExamples = examples.filter(
    example => filter === 'All' || example.description === filter
  );

  return (
    <PortfolioContainer>
      <ButtonsList>
        {['All', 'Web Site', 'App', 'Design', 'Marketing'].map(filterType => (
          <li key={filterType}>
            <FilterButton
              type="button"
              onClick={() => handleFilterChange(filterType)}
            >
              {filterType}
            </FilterButton>
          </li>
        ))}
      </ButtonsList>
      <ExamplesList>
        {filteredExamples.map((example, index) => (
          <ExamplesItem key={index}>
            <ExamplesLink href="">
              <ExamplesWrapper>
                <img
                  src={example.image}
                  alt={example.alt}
                  width="360"
                  height="300"
                />
              </ExamplesWrapper>
              <ExamplesItemDiv>
                <FrequentlyHeader>{example.title}</FrequentlyHeader>
                <FrequentlyDescription>
                  {example.description}
                </FrequentlyDescription>
              </ExamplesItemDiv>
            </ExamplesLink>
          </ExamplesItem>
        ))}
      </ExamplesList>
    </PortfolioContainer>
  );
};

export default Portfolio;
