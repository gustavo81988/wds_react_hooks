import React, {Fragment,useState,useRef} from 'react';

const App = () =>{
  const [name, setName] = useState('');
  const inputRef = useRef();

  const setNameHandler = (event) =>{
    setName(event.target.value);
  }

  const focus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <Fragment>
      <input ref={inputRef} value={name} onChange={setNameHandler} type="text" />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </Fragment>
  );
}

export default App;
