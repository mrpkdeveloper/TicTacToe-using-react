import React from 'react'
import Square from './Square'

export default function Board() {
    return (
        //we put all row in single div as we cannot return multiple divs
        <div>
            //first row
            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>

            //second row
            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>

            //third row
            <div className="border-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}