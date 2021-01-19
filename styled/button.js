import styled from 'styled-components';

export const FetchButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #efe8f2;
  outline: 0;
  border: none;
  font-size: 1rem;
  color: #a08c5f;
  font-weight: 700;
  letter-spacing: 2px;
  :hover,
  :focus,
  :active {
    border: 2px solid #201b15;
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
