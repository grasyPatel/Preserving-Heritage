import React from 'react'
import './Game.css'
const Game = () => {
  return (
      <div className="gameCon">
            <div>
        <iframe title='game' src="https://scratch.mit.edu/projects/719825567/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>

       <div ><iframe title='arrow' src="https://scratch.mit.edu/projects/1056561265/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe></div>
       <div><iframe  title="collect" src="https://scratch.mit.edu/projects/883032257/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe></div>
    </div>
  )
}

export default Game;