import React, {useState} from "react";


function Home() {
    return (
        <div>
            <h1>Welcome To Your Backlog!</h1>
            <h2>Add to Backlog</h2>
            <form>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..."></input><br></br>
                <label> Image Link:</label><br></br>
                <input type="text" placeholder="link to image"></input><br></br><br></br>    
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    );
}

export default Home;