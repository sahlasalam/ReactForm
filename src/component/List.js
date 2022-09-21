import React from 'react'
import {useLocation} from 'react-router-dom'

function List() {
    const loc= useLocation();
    console.log(loc.state);
  return (
    <div>
                <table border="1">
            <thead>
                <tr><th>Name</th>
                <th>Designation</th>
                <th>Mobile Num</th>
                <th>Join Date</th></tr>
            </thead>
            <tbody>
                {loc.state.map(item=>(
                    <tr>
                        
                        <td>{item.Name}</td>
                        <td>{item.Designation}</td>
                        <td>{item.Doj}</td>
                        <td>{item.Mobile}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default List