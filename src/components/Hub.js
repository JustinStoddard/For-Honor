import React from 'react';

const Hub = () => (
  <div>
    <h1>Hub</h1>
    <p>This Is where you can view stats<br /> from player all over the world!</p>
      <table>
        <thead>
          <th>
           <td>
             <h2>Stats</h2>
           </td>

            <td>
              <h4>Player(s)</h4>
            </td>

            <td>
              <h4>Rank</h4>
            </td>

            <td>
              <h4>Character</h4>
            </td>

            <td>
              <h4>K.D.</h4>
            </td>
          </th>
        </thead>
          
        <tbody>
          <tr>
            <td><strong>Vex Justin</strong></td>
            <td>135</td>
            <td>Shugoki</td>
            <td>K: 11034 D: 8086</td>
          </tr>

          <tr>
            <td><strong>BlakesPineapple</strong></td>
            <td>120</td>
            <td>Warden</td>
            <td>K: 10034 D: 7589</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table>
  </div>
)

export default Hub;
