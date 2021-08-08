import { useState } from 'react';
import './App.css';

function App() {

  const [currentWindow, setCurrnetWindow] = useState("lang")

  // a function to update a specifec key in a object in particualr the options state (const)
  // first we set the state options constant
  const [options, setOptions] = useState({
    lang: null, 
    where: null 
  })
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
