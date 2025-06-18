import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// let name="Kunal";


/*only return one element i.e div in this case*/
//or you can use jsx fragment <>,</>
 //container is a bootstrap class which makes it in middle 
 //success is to change alert colour
 
function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const handleAlert=(message,type,startmessage)=>{
    setAlert({
       msg: message,
       type: type,
       startmsg: startmessage
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }
//can make separate useState for themetext but can use terniary operator too
const handleClick2=()=>{
  if(mode == 'light')
  {setMode("danger")
   document.body.style.backgroundColor='#ff616e'
   handleAlert('Red Mode is Enabled','success',"Sucess!")
  }  
  else
  {setMode('light')
  document.body.style.backgroundColor='white'
  handleAlert('Light Mode is Enabled','success',"Sucess!")}
  }


  const handleClick=()=>{
  if(mode == 'light')
  {setMode('dark')
   document.body.style.backgroundColor='#343a40' //this document refers to index.html in public folder 
   handleAlert('Dark Mode is Enabled','success',"Sucess!")}  
  else
  {setMode('light')
  document.body.style.backgroundColor='white'
  handleAlert('Light Mode is Enabled','success',"Sucess!")}
  }
  // setInterval(() => {
  //   document.title="Hey"
  // }, 2000);                        for bad virus type sites that blinks
  
 
  return (
<><Router>
<Navbar title="Text Modifier by Kunal Tyagi" title1={1.1} theme={mode} btn={handleClick} btn2={handleClick2}/> 


<Alert alert={alert} />

 <div className="container px-3 my-3"> 
 
 <Routes>
          <Route exact path="/about" element={<About    />}/>
          <Route exact path="/" element={<Textform title="Enter Below" theme={mode} handleAlertt={handleAlert} />}/>
          
 </Routes>  
        </div>
</Router>  
</>
  );
}

export default App;
