import React from 'react';
import './App.css';
import Todo from './containers/Todo';
// import Map from './containers/Map';

const App:React.FC=()=>{
  return (
    <div className="App">
      <header className="App-header">
        {/* <Map/> */}
        <Todo/>
      </header>
    </div>
  );
}

export default App;
