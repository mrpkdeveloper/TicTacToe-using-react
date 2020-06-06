import React from 'react'
import Square from './Square'

export default class Board extends React.Component {
    rendersquare = (i) => {
        return (
            < Square value={this.props.squares[i]} handleClick={() => this.props.clickAction} />
        )
    }
    render() {
        return (
            //we put all row in single div as we cannot return multiple divs
            <div>
                {/* first row */}
                < div className="border-row" >
                    {this.rendersquare(0)}
                    {this.rendersquare(1)}
                    {this.rendersquare(2)}
                </div >

                {/* //second row */}
                < div className="border-row" >
                    {this.rendersquare(3)}
                    {this.rendersquare(4)}
                    {this.rendersquare(5)}
                </div >

                {/* //third row */}
                < div className="border-row" >
                    {this.rendersquare(6)}
                    {this.rendersquare(7)}
                    {this.rendersquare(8)}
                </div >
            </div >
        )
    }

}