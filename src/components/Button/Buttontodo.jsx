import React from 'react';

const Buttontodo = ({ action, name, id }) => {
    return (
        <div>
            <button onClick={() => action(id)}>{name}</button>
        </div>
    );
};

export default Buttontodo;