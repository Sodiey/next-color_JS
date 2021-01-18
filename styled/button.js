import styled from 'styled-components';

export const CardButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 0;
  height: 100%;
  padding: 0.8rem;
  outline: none;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
    cursor: pointer;
  }
`;

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
`;
