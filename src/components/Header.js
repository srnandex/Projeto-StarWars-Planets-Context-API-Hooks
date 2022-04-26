import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { inputNamePlanet, setInputNamePlanet } = useContext(PlanetContext);

  return (
    <header>
      <h1>STAR WARS</h1>

      <input
        data-testid="name-filter"
        type="text"
        value={ inputNamePlanet }
        onChange={ (e) => setInputNamePlanet(e.target.value) }
      />
    </header>
  );
}

export default Header;
