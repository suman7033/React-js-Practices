import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useEffect, useState} from 'react';
//import Filter_Data from './components/Filter_Data';
//import Alert from './components/Alert';
import Count from './components/Count';
import Count1 from './components/Count_Remove';

function App() {
     const [remove,setRemove]=useState(true);
     const removeFun=()=>{
       setRemove(!remove);
     }
    // const [mode, setMode] = useState('light');
    // const [alert, setalert] = useState(null);
    //   //whether dark mode is enabled or not

    //   const showAlert=(message,type)=>{
    //     setalert({
    //       msg: message,
    //       type:type
    //     })
    //     setTimeout(() => {
    //         setalert(null);
    //     },1500);
    //   }

    // const toggleMode=()=>{
    //     if(mode==='light'){
    //       setMode('dark');
    //       document.body.style.backgroundColor='grey';
    //       showAlert("Dark mood has been enable", "sucess");
    //       document.title="TextUtils-Dark Mode"
    //     }else{
    //       setMode('light');
    //       document.body.style.backgroundColor='white';
    //       showAlert("Light mood has been enable", "sucess");
    //       document.title="TextUtils-Light Mode"
    //     }
    // }
  return (
     <>
     {/* <Navbar/> */}
     {/* <Count/><br/> */}
     {remove && <Count1/>}
     <button onClick={removeFun}>Remove</button>
      {/* <TextForm showAlert={showAlert}/> */}
      {/* <Filter_Data/> */}
       
     </>
  );
}

export default App;
