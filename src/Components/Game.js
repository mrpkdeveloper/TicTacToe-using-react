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
                { square: Array(9).fill(null) }
            ]
        }
    }

    handleclick = (i) => {
        const history = this.state.history
        const current = history[history.length - 1]
        const square = current.square
        square[i] = this.state.xisnext ? 'x' : '0'
        this.setState({
            history: history.concat({ square: square }),
            xisnext: this.state.xisnext,
            stepnumber: history.length
        })


    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>

            </div>
        )
    }

}