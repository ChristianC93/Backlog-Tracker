import React from "react";


function Form() {
    return (
        <div>
            <h2>Add to Backlog</h2>
            <form>
                <label> Game:</label>
                <input type="text" placeholder="game"></input>
                <label> Genre:</label>
                <input type="text" placeholder="genre"></input>
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    )
}

export default Form;