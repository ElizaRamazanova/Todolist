import React from 'react';
import { ItemContainer, ItemTitle, ItemStatus, DoneButton, EditButton, DeleteButton } from './ItemStyle'

const Item = ({ todo, doneTodo, editTodo, deleteTodo, index }) => {
    return (
        <ItemContainer todo={todo}>

            <ItemTitle><span
                style={{ color: 'purple' }}
            >{`${index + 1}) `}</span>{todo.name}</ItemTitle>
            <ItemStatus>{todo.status === 'new'
                ? 'Todo is Not Done'
                : todo.status === 'processing'
                    ? 'Todo is in process'
                    : 'Completed!!!'
            } </ItemStatus>
            <DoneButton onClick={() => doneTodo(todo.id)}>Done</DoneButton>
            <EditButton onClick={() => editTodo(todo.id)}>edit</EditButton >
            <DeleteButton onClick={() => deleteTodo(todo.id)}>delete</DeleteButton>
        </ItemContainer>
    );
};

export default Item;