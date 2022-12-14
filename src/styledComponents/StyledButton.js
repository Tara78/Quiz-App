import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 100px;
  min-height: 30px;
  color: #005e25;
  border-radius: 30px;
  border: 2px solid #005e25;
  padding: 5px;
  font-weight: 700;
  margin-top: 1rem;
  &:hover {
    background-color: darkgreen;
    color: white;
  }
  &:disabled {
    background-color: rgba(0, 94, 37, 0.25);
    color: rgb(0, 94, 37);
    border: none;
  }
`;
export const Button = styled.button`
  min-width: 150px;
  min-height: 50px;
  border-radius: 15px;
  background-color: rgba(0, 94, 37, 0.25);
  color: rgb(0, 94, 37);
  border: none;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    background-color: darkgreen;
    color: white;
  }
`;

