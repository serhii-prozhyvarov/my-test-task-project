import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  gap:10px;
  justify-content: center;
`;

export const FilterHeader = styled.h3`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--iris-primary-color);
  padding: 8px 16px;
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
export const SelectedFilterHeader = styled.h3`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--iris-primary-color);
  padding: 8px 16px;
  text-align: center;
  letter-spacing: 0.04em;
  background: var(--cloud-light-mode-color);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--corn-flower-accent-color);
  transition: color var(--transition-dur-and-cub),
    background var(--transition-dur-and-cub),
    box-shadow var(--transition-dur-and-cub);
  color: var(--clean-white);
  background: var(--ocean-pressed-state-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
