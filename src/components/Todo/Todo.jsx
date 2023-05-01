import React, { useState } from 'react';
import AlertTodo from '../Alert/AlertTodo';
import Form from '../Form/Form';
import Item from '../Item/Item';
import Status from '../Status/Status';
import { TodoTitle, Wrapper, WrapperBlock } from './TodoStyle';



const Todo = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleOpen = () => {
        setToggle(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setToggle(false);
        document.body.style.overflow = 'unset';
    };

    // useEffect(() => {
    //     let time;
    //     if (data.length > 0) {
    //         time = setTimeout(handleClose, 2000);
    //     }
    //     return () => {
    //         clearTimeout(time);
    //     };
    // }, [data]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const createTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: new Date().toISOString(),
            name: name,
            status: 'new',
            date: new Date(),
        };
        setData([todo, ...data]);
        // handleOpen();
    };

    const doneTodo = (id) => {
        const changeState = data.map((el) => {
            if (id === el.id) {
                if (el.status === 'new') {
                    return { ...el, status: 'processing' };
                } else if (el.status === 'processing') {
                    return { ...el, status: 'completed' };
                } else {
                    return { ...el, status: 'new' };
                }
            }
            return el;
        });
        setData(changeState);
    };

    const editTodo = (id) => {
        const changeState = data.map((el) => {
            if (id === el.id) {
                return { ...el, name: prompt('change') };
            }
            return el;
        });
        setData(changeState);
    };

    const deleteTodo = (id) => {
        setData(data.filter((el) => el.id !== id));
    };





    const items = data.map((todo, index) => (
        <Item
            key={todo.id}
            todo={todo}
            doneTodo={doneTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            index={index}
        />
    ));

    return (
        <Wrapper>
            <WrapperBlock>
                <TodoTitle>My Todo List</TodoTitle>
                <Form
                    name={name}
                    handleName={handleName}
                    createTodo={createTodo}
                    toggle={toggle}
                />

                <Status data={data} />
                {items}
            </WrapperBlock>
            {toggle && <AlertTodo />}
        </Wrapper>
    );
};

export default Todo;
