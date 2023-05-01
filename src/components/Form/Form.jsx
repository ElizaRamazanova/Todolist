import React from 'react';
import { StyledForm, StyledInput, StyledButton } from './FormStyle.jsx'


const Form = ({ handleName, name, createTodo, toggle }) => {
    return (
        <StyledForm
            onSubmit={(e) => createTodo(e)}
        >
            <StyledInput
                value={name}
                type="text"
                onChange={handleName}
            />
            <StyledButton
                disabled={toggle}
            >Create Todo</StyledButton>
        </StyledForm>
    )
};

export default Form;