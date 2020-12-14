import { useState } from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <header>
      <h1>GMDB</h1>
      <Link id='homeLink' to='/'>
        Home
      </Link>
      <Link id='loginLink' to='/login'>
        Login
      </Link>
      <form>
        <input
          type='search'
          value={searchText}
          onChange={handleSearchTextChange}
        ></input>
        <button onClick={() => handleSearch(searchText)} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
};

export default PageHeader;
