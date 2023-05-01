import styled from "styled-components";

export const AllTodoButton = styled.button`
    padding: 8px 16px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.secondary ? '#dc3545' : '#007bff')};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
        props.secondary ? '#c82333' : '#0069d9'};
  }

  &:disabled {
    background-color: #ddd;
    cursor: default;
  }
`;
