import React from "react";
import { useEffect } from "react";
import { Game } from "./utils/game";


const App = () => {
    useEffect(() => {
        const game = Game()

        return () => {
            game.destroy(true)
        }
    }, [])
    
    return (
        <div id="phaser"></div>
    );
}

export default App
