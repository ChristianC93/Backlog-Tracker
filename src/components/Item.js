import React from "react";


function Item({game}) {
    console.log(game.image)
    return (
        <div>
            <div>
                <h3>{game.name}</h3>
            </div>
            <div>
                <img src={game.image} alt={game.name} />
            </div>
            <div>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default Item;