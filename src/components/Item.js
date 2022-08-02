import React from "react";


function Item({game, onGameClick}) {
    function handleButtonClick() {
        onGameClick(game);
    }
    return (
        <div>
            <div>
                <h3>{game.name}</h3>
            </div>
            <div>
                <img src={game.image} alt={game.name} width="400" height="400" />
            </div>
            <div>
                <button onClick={handleButtonClick}>Completed</button>
            </div>
        </div>
    )
}

export default Item;