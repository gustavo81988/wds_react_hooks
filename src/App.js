import {useState, useEffect, Fragment} from 'react';

function App() {
  const [resourceType,setResourceType] = useState('posts');
  
  useEffect(()=>{
    console.log('resource type changed');
    
    //clean up (runs before next execution)
    return () =>{
      console.log('return from resource change');
    }
  },[resourceType]);

  return (
    <Fragment>
      <div>
        <button onClick={()=> setResourceType('posts')}>
          Posts
        </button>
        <button onClick={()=> setResourceType('users')}>
          Users
        </button>
        <button onClick={()=> setResourceType('comments')}>
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
    </Fragment>
  );
}

export default App;
