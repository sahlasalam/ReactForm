import React, { useState } from 'react'
import Display from './Display'

function FormBody() {

    const [employee, setEmployee] = useState([])
    const [name, setName] = useState("");
    const [desg, setDesg] = useState("");
    const [num, setNum] = useState();
    const [date, setDate] = useState();
    const [popUp, setPopUp] = useState(false);
    // const employee = [];

    const enterName=(e)=>{
        setName(e.target.value);
    }

    const enterDes=(e)=>{
        setDesg(e.target.value); 
    }

    const phone=(e)=>{
        setNum(e.target.value)
    }

    const joinDate=(e)=>{
        setDate(e.target.value)
    }

    const addItem=()=>{
        setEmployee(current=>[...current, {Name :name , Designation : desg ,  Doj : date , Mobile : num }]);   
        setName("");
        setDesg("");
        setDate("");
        setNum("");
    }
    const addpop=()=>{
        setPopUp(true);
    }

    const submitForm=()=>{
        addItem();
        addpop();
    }
    // console.log(employee);

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
        <h5>DOJ :</h5>
        <input type={"date"} value={date} onChange={joinDate}></input>
        </div>
        <div>
        <h5>Mob Number :</h5>
        <input value={num} onChange={phone}></input>
        </div>
        <button className='btn1' onClick={submitForm}>Submit</button>
        <Display popUp={popUp} name={name} desg={desg} setPopUp={setPopUp} employee={employee}/>

    </div>
      )

}


export default FormBody