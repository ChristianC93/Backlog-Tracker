import React, {useState} from "react";


function Home({onAddGame}) {
    const [newGame, setNewGame] = useState({
        name: "",
        image: ""
    })

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        setNewGame({
            ...newGame,
            [name]: value
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://backlogtrackerdata.herokuapp.com/games", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newGame)
        })
        .then((r) => r.json())
        .then((data) => onAddGame(data))
        .then(() => setNewGame({name:"", image:""}))
    }

    return (
        <div>
            <h1>Backlog Tracker</h1>
            <h2>Add to Backlog</h2>
            <form onSubmit={handleSubmit}>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..." name="name" size="50" value={newGame.name} onChange={handleChange}></input><br></br>
                <label> Image Link:</label><br></br>
                <input type="text" placeholder="link to image..." name="image" size="50" value={newGame.image} onChange={handleChange}></input><br></br><br></br>    
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    );
}

export default Home;