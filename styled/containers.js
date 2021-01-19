import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const StyledColumn = styled.div`
  margin: 1rem;
  flex-basis: 15%;
  border-radius: 10px;
  min-width: 250px;
  background-color: ${({ color }) => color};
`;

export const Card = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: 0;
  position: relative;
  height: 100%;
  padding: 0.8rem;
  outline: none;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
`;
