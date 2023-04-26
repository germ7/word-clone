import React from "react";
import Guess from "../Guess";
import {checkGuess} from "../../game-helpers";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({guesses, answer}) {

    return <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) =>
            <Guess key={index}
                   checkedGuess={checkGuess(guesses[index], answer)}
            />
        )}
    </div>
}

export default GuessResults;
