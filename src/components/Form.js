import React from "react";


function Form() {
    return (
        <div>
            <h2>Add to Backlog</h2>
            <form>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..."></input><br></br>
                <label> Genre:</label><br></br>
                <input type="text" placeholder="genre..."></input><br></br><br></br>
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    )
}

export default Form;