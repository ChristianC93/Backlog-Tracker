import React from "react";
import Item from "./Item";


function CompletedList({ completedGames }) {
    return (
        <div>
            {completedGames.map((game) => {
                return (
                    <Item key={game.id} game={game} />
                )
            })}
        </div>
    )
}

export default CompletedList;