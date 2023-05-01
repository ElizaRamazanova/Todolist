import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 16px 0;
  width: 100%;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  height: 40px;
`;

export const StyledButton = styled.button`
  padding: 0 16px;
  height: 40px;
  width: fit-content;
  border: none;
  border-radius: 4px;
  background-color: #e625ac;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #39f493;
  }

  &:disabled {
    background-color: #ddd;
    cursor: default;
  }
`;