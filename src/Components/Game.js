import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
    constructor() {
        // always call super first 
        // without calling super u cannot use this 
        super()
        this.state = {
            xisnext: true,
            stepnumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    handleClick = (i) => {
        const history = this.state.history
        const current = history[history.length - 1]
        const squares = current.squares
        squares[i] = this.state.xisnext ? 'x' : '0'
        this.setState({
            history: history.concat({ squares: squares }),
            xisnext: this.state.xisnext,
            stepnumber: history.length
        })


    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepnumber]
        return (
            <div className="game">
                <div className="game-board">
                    <Board clickAction={(i) => this.handleClick(i)} squares={current.squares} />
                </div>

            </div>
        )
    }

}