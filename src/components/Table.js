import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { getPlanets, planets, keysResult } = useContext(PlanetContext);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {keysResult.map((el, ind) => (
            <th key={ ind }>
              { el }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { planets.map((pla, id) => (
          <tr key={ id }>
            {
              keysResult.map((ke, idd) => {
                if (ke === 'films') {
                  return (
                    <td>
                      { pla[ke].map((ur, iddd) => (
                        <span key={ iddd }>{ ur }</span>
                      )) }
                    </td>
                  );
                }
                return <td key={ idd }>{ pla[ke] }</td>;
              })
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
