import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './Navbar';
import BacklogList from './BacklogList';
import Form from './Form';
import CompletedList from './CompletedList';




function App() {
  const [backlog, setBacklog] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then((data) => setBacklog(data))
  }, [])


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/backlog">
          <BacklogList games={backlog} />
        </Route>
        <Route exact path="/completed">
          <CompletedList />
        </Route>
        <Header />
        <Form />

      </Switch>
    </div>
  );
}

export default App;
