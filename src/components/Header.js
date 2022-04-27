import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const {
    inputNamePlanet,
    setInputNamePlanet,
    allFilters,
    setAllFilters,
    selectedFilters,
    setSelectedFilters } = useContext(PlanetContext);

  return (
    <header>
      <h1>STAR WARS</h1>

      <input
        data-testid="name-filter"
        type="text"
        value={ inputNamePlanet }
        onChange={ ({ target }) => setInputNamePlanet(target.value) }
      />

      <select
        value={ selectedFilters.column }
        onChange={
          (e) => setSelectedFilters({ ...selectedFilters, column: e.target.value })
        }
        data-testid="column-filter"
      >
        { ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
          .map((elemen, id) => (
            <option key={ id } value={ elemen }>{ elemen }</option>
          )) }

      </select>
      <select
        data-testid="comparison-filter"
        value={ selectedFilters.comparison }
        onChange={
          (e) => setSelectedFilters({ ...selectedFilters, comparison: e.target.value })
        }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ selectedFilters.value }
        onChange={
          (e) => setSelectedFilters({ ...selectedFilters, value: e.target.value })
        }
        type="number"
      />
      <button
        data-testid="button-filter"
        onClick={ () => {
          // console.log(selectedFilters);
          setAllFilters([...allFilters, selectedFilters]);
          setSelectedFilters({
            column: 'population',
            comparison: 'maior que',
            value: 0,
          });
        } }
        type="button"
      >
        Filtrar

      </button>
    </header>
  );
}

export default Header;
