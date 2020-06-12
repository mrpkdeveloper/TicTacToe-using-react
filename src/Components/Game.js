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


    //let i be the index of input
    handleClick = (i) => {
        const history = this.state.history
        const current = history[history.length - 1]
        const squares = current.squares
        const winner = calculatewinner(squares)

        //if there is winner do nothing and if there is value at that square than do nothing
        if (winner || squares[i]) {
            return
        }
        //otherwise do these things
        squares[i] = this.state.xisnext ? 'x' : 'o'

        this.setState({
            history: history.concat({ squares: squares }),
            xisnext: !this.state.xisnext,
            stepnumber: history.length
        })

    }


    render() {
        const history = this.state.history
        const current = history[this.state.stepnumber]
        let status;
        let winner = calculatewinner(current.squares)
        if (winner) {
            status = 'winner is ' + winner
        } else {
            status = ' Next player is  ' + (this.state.xisnext ? 'x' : 'o')
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board clickAction={(i) => this.handleClick(i)} squares={current.squares} />
                </div>

                <div className="game-info">
                    <div>
                        {status}
                    </div>
                </div>

            </div>
        )
    }

}

function calculatewinner(squares) {
    const posiblities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < posiblities.length; i++) {
        const [a, b, c] = posiblities[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }
    return null

}