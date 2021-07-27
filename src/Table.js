import React from 'react'
import './Table.css';
function Table({ countries }) {
    countries.sort((a, b) => {
        return a.cases- b.cases;
    }).reverse()
 
    return (
        <div className="table">
            <tr>
                <td style={{fontSize:"20px",fontWeight:"bold"}}>Countries</td>
                <td style={{fontSize:"20px",fontWeight:"bold"}}>Cases</td>
            </tr>
            {countries.map((item) => {
                const { country, cases } = item;
                return <tr>
                    <td className="table__country">{country}</td>
                    <td><strong>{ cases}</strong></td>
                </tr>
            })}
            
            
        </div>
    )
}

export default Table
