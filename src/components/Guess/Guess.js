import React from "react";
import {range} from "../../utils";

function Guess({checkedGuess}) {
    return <p className="guess">
        {
            range(5).map((index) => {
                const {letter, status} = checkedGuess && checkedGuess[index] ? checkedGuess[index] : {
                    letter: '',
                    status: undefined
                }

                return <span key={index} className={`cell ${status}`}>
        {letter}
    </span>
            })
        }

    </p>
}

export default Guess;
