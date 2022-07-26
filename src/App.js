import React, { useState, useReducer } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

function reducer(todos,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo)=>{
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        };
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo)=>{
        return todo.id !== action.payload.id
      })
    default:
      return todos;
  }
}

function newTodo(name){
  return {id:Date.now(), name:name, complete:false}
}


function App() {
  const [todos,dispatch] = useReducer(reducer,[]);
  const [name, setName]  = useState('');

  function submitHandler(event){
    event.preventDefault();
    dispatch({ type : ACTIONS.ADD_TODO, payload: {name: name}});
  }

  function onChangeHandler(event){
    setName(event.target.value);
  }
  
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={onChangeHandler}/>
      </form>
      {todos.map((todo)=>{
        console.log(todo);
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </React.Fragment>
  );
}

export default App;
