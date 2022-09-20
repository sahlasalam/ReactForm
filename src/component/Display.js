import React from 'react'

function display({popUp ,setPopUp, employee}) {
  return (
    popUp?<div className='popbox'>
        <table>
            <thead>
                <tr><th>Name</th>
                <th>Designation</th>
                <th>Mobile Num</th>
                <th>Join Date</th></tr>
            </thead>
            <tbody>
                {employee.map(item=>(
                    <tr>
                        
                        <td>{item.Name}</td>
                        <td>{item.Designation}</td>
                        <td>{item.Doj}</td>
                        <td>{item.Mobile}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className='btn2' onClick={()=>setPopUp(false)}>Close</button>

    
    </div>:""
  )
}

export default display


    //     popUp?<div className='popbox'>
    //             <h4>Name : {name}</h4>
    //             <h4>Designation : {desg}</h4>
    //         </div>
    //    :""
