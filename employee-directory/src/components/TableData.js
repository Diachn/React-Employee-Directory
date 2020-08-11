import React from "react";
import Moment from 'react-moment';
import "./style.css";

function TableData(props) {
      return (
        <div className="container-fluid">
        <table  className="container">
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
               
            <tbody className= "">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                     
                        <td>{result.name.first + " " + result.name.last}  </td>

                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}
            </tbody>
        </table >
        </div>
    )

}

export default TableData