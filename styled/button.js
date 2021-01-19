import styled from 'styled-components';

export const FetchButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: 0;
  padding: 10px;
  border: none;
  :hover,
  :focus,
  :active {
    border: 2px solid #0070f3;
    cursor: pointer;
  }
`;
export const LinkButton = styled.a`
  width: 100%;
  display: block;
  color: ${({ contrast }) => contrast};
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
`;

export const DryButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  margin: 0;
  :hover,
  :focus,
  :active {
    cursor: pointer;
    padding: 3px
`;
