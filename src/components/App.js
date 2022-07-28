import React, {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './Navbar';

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then((r) => r.json())
    .then((data) => setGames(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
