import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    getPlanets,
    planets,
    keysResult,
    inputNamePlanet,
    allFilters } = useContext(PlanetContext);
  const [filterPlanets, setFilterPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allFilters.length === 0) {
      return setFilterPlanets(planets);
    }
    allFilters.forEach((ele) => {
      switch (ele.comparison) {
      case 'maior que':
        setFilterPlanets(filterPlanets
          .filter((el) => Number(el[ele.column]) > Number(ele.value)));
        break;
      case 'menor que':
        setFilterPlanets(filterPlanets
          .filter((el) => Number(el[ele.column]) < Number(ele.value)));
        break;
      default:
        setFilterPlanets(filterPlanets
          .filter((el) => Number(el[ele.column]) === Number(ele.value)));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilters, planets]);

  useEffect(() => {
    if (filterPlanets.length === 0) {
      setFilterPlanets(planets);
    }
  }, [filterPlanets.length, planets]);

  useEffect(() => {
    const filterByName = planets.filter(({ name }) => name.includes(inputNamePlanet));
    setFilterPlanets(filterByName);
  }, [inputNamePlanet, planets]);

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
        { filterPlanets.map((pla, id) => (
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
