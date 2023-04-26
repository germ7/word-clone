import React, {useState} from "react";
import {ANSWER_LENGTH} from "../Game/Games.constants";

function GuessInput({handleGuess, disabled}) {
    const [guess, setGuess] = useState('')

    function submitGuess(event) {
        event.preventDefault()
        if (guess.length !== ANSWER_LENGTH) {
            window.alert(`Guess length must be ${ANSWER_LENGTH}`)
            return
        }
        handleGuess(guess)
        setGuess('')
    }

    return <form onSubmit={submitGuess} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess</label>
        <input
            id="guess-input"
            type="text"
            required
            minLength={5}
            maxLength={5}
            disabled={disabled}
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            value={guess}
            onChange={(event) => {
                setGuess(event.target.value.toUpperCase())
            }}/>
    </form>;
}

export default GuessInput;
