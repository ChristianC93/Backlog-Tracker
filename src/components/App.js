import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './Navbar';
import BacklogList from './BacklogList';
import CompletedList from './CompletedList';




function App() {
  const [backlog, setBacklog] = useState([]);
  const [completedGames, setCompletedGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then((r) => r.json())
    .then((data) => setBacklog(data))
  }, [])

  function onGameClick(game) {
    setCompletedGames([...completedGames, game]);
  }

  function handleAddGame(newGame) {
    setBacklog([...backlog, newGame])
  }


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/backlog">
          <BacklogList games={backlog} onGameClick={onGameClick} />
        </Route>
        <Route exact path="/completed">
          <CompletedList completedGames={completedGames} />
        </Route>
        <Route exact path="/">
          <Home onAddGame={handleAddGame} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
