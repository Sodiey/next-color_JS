import styled from 'styled-components';

export const WithThemeText = styled.h2`
  color: ${({ contrast }) => contrast};
  margin: 0 0 1rem 0;
  font-size: ${({ size }) => (size ? size : '1.5rem')};
  text-align: left;
  max-width: 80%;
  :hover {
    border-bottom: ${({ contrast }) => '1px solid ' + contrast};
    cursor: pointer;
    width: fit-content;
    letter-spacing: 1px;
  }
`;
