import React, {useState} from "react";


function Home({onSubmit}) {
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
        e.preventDefault()
        onSubmit(newGame)
    }

    return (
        <div>
            <h1>Welcome To Your Backlog!</h1>
            <h2>Add to Backlog</h2>
            <form onSubmit={handleSubmit}>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..." name="name" value={newGame.name} onChange={handleChange}></input><br></br>
                <label> Image Link:</label><br></br>
                <input type="text" placeholder="link to image..." name="image" value={newGame.image} onChange={handleChange}></input><br></br><br></br>    
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    );
}

export default Home;