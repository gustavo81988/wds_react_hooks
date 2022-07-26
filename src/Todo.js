import React from 'react';
import {ACTIONS} from './App';

const Todo = (props) => {
    return(
        <div>
            <span style={{color: props.todo.complete ? '#AAA' : '#000'}}>
                {props.todo.name}
            </span>
            <button onClick={()=>{
                props.dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: {id: props.todo.id}
                })
            }}>Toggle</button>
            <button onClick={()=>{
                props.dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: {id: props.todo.id}
                })
            }}>Delete</button>
        </div>
    );
}

export default Todo;