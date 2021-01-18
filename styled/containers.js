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
  min-width: 200px;
  background-color: ${({ color }) => color};
`;
