import { useEffect, useState } from 'react';
import SelectLang from './selectLang/SelectLang';
import WhereEn from './en/where/WhereEn'
import WhereAr from './ar/where/WhereAr'
import KindEn from './en/kind/KindEn';
import KindAr from './ar/kind/KindAr';
import './App.css';

function App() {

  const [currentWindow, setCurrentWindow] = useState("lang")

  // a function to update a specifec key in a object in particualr the options state (const)
  // first we set the state options constant
  // cite(1)
  const [options, setOptions] = useState({
    lang: null, 
    where: null, 
    kind: null
  })
  function changeOption(value){
    setOptions({
      lang: options.lang, 
      where:  options.where, 
      kind:  options.kind,
      [value.key] : value.value
    })
  }
  


  // this will allow to me to give all the components a any function in here and change when ever i whant 
  const prop = {
    setCurrentWindow:setCurrentWindow,
    changeOption:changeOption
  }


  useEffect(()=>{
    console.log(options, currentWindow)
  }, [currentWindow, options])


  return (
    <div className="App">
      {
        currentWindow == "lang" ? <SelectLang prop={prop} /> : 
        currentWindow == "where" ? (options.lang=="ar") ? <WhereAr prop={prop} /> : <WhereEn prop={prop} /> :
        currentWindow == "kind" ? (options.lang=="ar") ? <KindAr prop={prop}/> : <KindEn prop={prop} /> :
        ""
      }
    </div>
  );
}

export default App;


/* 
  cite (1):react state object {
    lang : means the language;
    where : means where do you wanna take your order here or out , in our case it will print dinein for Dine in or takeaway for Take away;
    kind : means that what do you want of any kind and actually we will call this in the future to be a dynamic catogries from the database;
  }
*/