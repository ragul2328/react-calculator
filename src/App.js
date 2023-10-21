import React from 'react';
import './style.css';
import {useState} from 'react'

export default function App() {
  const[value,setvalue]=useState('')
  return (
    <>
    <form action="" className='container'>
      <div className="calculator">
        <input type="text" value={value} ></input>
      </div>
      <div className="elements">
        <input type="text" value='1' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='2' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='3' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='+' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='=' className='equal'onClick={e=>setvalue(eval(value))}></input>
       
      </div>
      <div className="elements">
        <input type="text" value='4' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='5' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='6' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='-' onClick={(e=>setvalue(value+e.target.value))}></input>
      </div>
      <div className="elements">
        <input type="text" value='7' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='8' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='9' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='*' onClick={(e=>setvalue(value+e.target.value))}></input> 
      </div>
      <div className="elements">
        <input type="text" value='.' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='0' onClick={(e=>setvalue(value+e.target.value))}></input>
        <input type="text" value='C' onClick={(e=>setvalue("0"))}></input>
        <input type="text" value='/' onClick={(e=>setvalue(value+e.target.value))}></input>
      </div>


    </form>
    </>
  );
}
