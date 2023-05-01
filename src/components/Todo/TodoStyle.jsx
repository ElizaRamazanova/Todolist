
import styled from "styled-components";


export const TodoTitle = styled.h2`
    color: #72065d;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:  40px 20px;
    min-height: 100vh;
    height: auto;
    background: linear-gradient(217deg, rgba(255,0,0,.8), 
                rgba(255,0,0,0) 70.71%),            
                linear-gradient(127deg, rgba(0,255,0,.8), 
                rgba(0,255,0,0) 70.71%),            
                linear-gradient(336deg, rgba(0,0,255,.8), 
                rgba(0,0,255,0) 70.71%);
`
export const WrapperBlock = styled.div`
       display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`











// /* стили для формы */
// form {
//     margin-bottom: 20px;

// }

// form input {
//     padding: 20px;
//     width: 300px;
//     background: #4169e19e;
//     margin-right: 10px;
//     display: flex;
//     flex-direction: column;
//     border-radius: 5px;
// }

// form button {
//     background-color: #4169e19e;
//     color: white;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }

// /* стили для элемента списка */
// .item {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 10px;
//     padding: 10px;
//     border: 1px solid rgb(204, 204, 204);
//     border-radius: 4px;
// }

// .item__name {
//     flex: 1;
//     margin-right: 10px;
// }

// .item__status {
//     color: white;
//     padding: 4px;
//     border-radius: 4px;
//     text-transform: uppercase;
//     font-weight: bold;
// }

// .item__status--new {
//     background-color: green;
// }

// .item__status--processing {
//     background-color: blue;
// }

// .item__status--completed {
//     background-color: red;
// }

// /* стили для кнопок */
// button {
//     background-color: #4CAF50;
//     color: white;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     margin-right: 10px;
// }

// .button--edit {
//     background-color: #2196F3;
// }

// .button--delete {
//     background-color: #f44336;
// }