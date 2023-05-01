import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
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

export const DoneButton = styled(StyledButton)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export const EditButton = styled(StyledButton)`
  background-color: #ffc107;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled(StyledButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  padding: 8px;
  background-color: ${(props) =>
    props.todo.status === 'new'
      ? 'lightgreen'
      : props.todo.status === 'processing'
        ? 'yellow'
        : 'pink'};
`;

export const ItemTitle = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 8px;
    word-wrap: break-word;
  span {
    color: orange;
  }
`;

export const ItemStatus = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
`;