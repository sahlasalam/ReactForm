import React, { useState } from 'react'
import Display from './Display'

function FormBody() {

    const [name, setName] = useState("");
    const [desg, setDesg] = useState("");
    const [popUp, setPopUp] = useState(false)

    const enterName=(e)=>{
        setName(e.target.value);
    }

    const enterDes=(e)=>{
        setDesg(e.target.value);      
    }

  return (
    <div className='formbox'>
        <div className='namebox'>
        <h5>Name : </h5>
        <input type={"text"}  value={name} onChange={enterName}></input>
        </div>
        <div>
        <h5>Designation :</h5>
        <input type={"text"} value={desg} onChange={enterDes}></input>
        </div>
        <div>
        <h5 id='doj'>DOJ :</h5>
        <input type={"date"} id='doj'></input>
        </div>
        <div>
        <h5 id='mob'>Mob Number :</h5>
        <input id='mob'></input>
        </div>
        <button className='btn1' onClick={()=>setPopUp(true)}>Submit</button>
        <Display popUp={popUp} name={name} desg={desg} setPopUp={setPopUp}/>

    </div>
  )

}


export default FormBody