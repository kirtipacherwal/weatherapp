import React from "react";
import '../App.css';
import { useState, useEffect } from "react";


function Main()
{
    //const [name, setName] = useState("");
const  [START, setSTART]= useState(false)
const  [STOP, setSTOP]= useState(false)
const [sec, setSec] = useState(0)
const [timestring, settimestring] = useState('')

useEffect(() =>{
  const date = new Date(0)
date.setSeconds(sec)
settimestring(date.toISOString().slice(11,19))
},[sec]
)


useEffect(()=>{
  let timer = null;
  if(START &! STOP){
    timer = setInterval(() => {
      setSec(sec=>sec+1)
    }, 1000);
  }
  else if(STOP){
    clearInterval(timer);
  }
  return () =>{
    clearInterval
    (timer)
  }
},[START, STOP])

const handlestop=()=> {
  setSTART(START => !START)
  setSTOP(STOP => !STOP)
}

const reset = () =>{
  setSec(0)
  setSTART(false)
  setSTOP(false)
}

const handlestart = () =>{
  setSTART(true)
  setSTOP(false)
}



  return (
    <div className="container">
      <div className="box">
      {/* <h1>{sec}</h1> */}
      <p>{timestring}</p>
    <button onClick={handlestart}>START {START}</button>
    <button onClick={handlestop}>STOP{STOP}</button>
    <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default Main;


