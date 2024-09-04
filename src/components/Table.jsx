import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container" style={{marginTop:'85px'}}>
      <h2>Cuisine and Culinary Delights</h2>
      <table id="customers">
       <thead>
       <tr>
          <th className="center">Region</th>
          <th>Speciality</th>
        </tr>
       </thead>
        <tbody>
          {/* Row 1 */}
        <tr> 
          <td>North India</td>
          <td>Butter chicken, dal makhani, tandoori chicken</td>
        </tr>
        {/* Row 2 */}
        <tr>
          <td>South India</td>
          <td>Dosa, idli, vada, sambar</td>
        </tr>
        {/* Row 3 */}
        <tr>
          <td>West India</td>
          <td>Pav bhaji, vada pav, misal pav</td>
          
        </tr>
        {/* Row 4 */}
        <tr>
          <td>East India</td>
          <td>Fish curry, prawn malai curry, chingri malai curry</td>

        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;