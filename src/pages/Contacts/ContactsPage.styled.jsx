import styled from '@emotion/styled';

export const ContactsWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContactsContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const LeftSideContact = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 8px;
    color: var(--iris-primary-color);
  }
  a {
    font-size: 16px;
    color: var(--slate-body-text-color);
    text-decoration: none;
    &:hover {
      color: var(--ocean-pressed-state-color);
    }
  }
  p {
    font-size: 16px;
    color: var(--slate-body-text-color);
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 16px;
    color: var(--iris-primary-color);
  }
  iframe {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
