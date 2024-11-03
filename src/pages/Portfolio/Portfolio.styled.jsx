import styled from '@emotion/styled';

export const PortfolioContainer = styled.div`
  padding: 48px 0 120px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0;
  list-style: none;
`;

export const FilterButton = styled.button`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--iris-primary-color);
  padding: 12px 24px;
  text-align: center;
  letter-spacing: 0.04em;
  background: var(--cloud-light-mode-color);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--corn-flower-accent-color);
  transition: color var(--transition-dur-and-cub),
    background var(--transition-dur-and-cub),
    box-shadow var(--transition-dur-and-cub);

  &:hover,
  &:focus {
    color: var(--clean-white);
    background: var(--ocean-pressed-state-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ExamplesList = styled.ul`
margin-top:30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding-bottom: 120px;
  list-style: none;
`;

export const ExamplesItem = styled.li`
display: block;
  flex-basis: calc((100% - 2 * 200px) / 3);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const ExamplesLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover .ExamplesItemDiv,
  &:focus .ExamplesItemDiv {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;

export const ExamplesWrapper = styled.div`
  position: relative;
  width:350px;
  `;

export const ExamplesItemDiv = styled.div`
  padding: 32px 16px;
  transition: box-shadow var(--transition-dur-and-cub);
  `;

export const FrequentlyHeader = styled.h2`
  margin: 0;
  `;

export const FrequentlyDescription = styled.p`
  margin-top: 8px;
`;
