import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import Api from '../services/Api';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [keysResult, setKeysResult] = useState([]);
  const [inputNamePlanet, setInputNamePlanet] = useState('');
  const [allFilters, setAllFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  async function getPlanets() {
    const planetss = await Api();
    setPlanets(planetss);
    const arrayKeys = Object.keys(planetss[0])
      .map((element) => element)
      .filter((ele) => ele !== 'residents');
    setKeysResult(arrayKeys);
  }

  const contextValue = {
    getPlanets,
    planets,
    keysResult,
    inputNamePlanet,
    setInputNamePlanet,
    selectedFilters,
    setSelectedFilters,
    allFilters,
    setAllFilters,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
