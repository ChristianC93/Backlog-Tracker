import React from "react";
import Item from "./Item";


function BacklogList({games}) {
    return (
        <div>
            {games.map((game) => {
                return (
                    <Item key={game.id} game={game} />
            )})}
        </div>
    )
}

export default BacklogList;