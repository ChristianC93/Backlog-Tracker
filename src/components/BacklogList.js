import React from "react";
import Item from "./Item";


function BacklogList({games, onGameClick}) {
    return (
        <div>
            {games.map((game) => {
                return (
                    <Item key={game.id} game={game} onGameClick={onGameClick}/>
            )})}
        </div>
    )
}

export default BacklogList;