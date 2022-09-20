import React from 'react'

function display({popUp , name, desg, setPopUp}) {
  return (
        popUp?<div className='popbox'>
                <h4>Name : {name}</h4>
                <h4>Designation : {desg}</h4>
                <button className='btn2' onClick={()=>setPopUp(false)}>Close</button>
            </div>
       :""
  )
}

export default display