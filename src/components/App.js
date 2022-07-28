import React, {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './Navbar';
import BacklogList from './BacklogList';



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
      <Header />
      <BacklogList games={backlog} />
    </div>
  );
}

export default App;
