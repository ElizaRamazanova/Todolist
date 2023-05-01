import React from 'react';
import './AlertStyle.jsx'
import Alert from './Alert.jsx';



const AlertTodo = () => {
    return (
        <div className="alert">
            <Alert severity="success">TODO IS CREATED!</Alert>
        </div>
    );
};

export default AlertTodo;