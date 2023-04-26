import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';

import GuessInput from '../GuessInput'
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GuessResults from "../GuessResults";
import SuccessBanner from "../SuccessBanner";
import LossBanner from "../LossBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guessesAttempts, setGuessesAttempts] = useState(0)
    const [guesses, setGuesses] = useState([])
    const [gameStatus, setGameStatus] = useState("running")

    function handleGuess(guess) {
        const currentGuessAttempts = guessesAttempts + 1

        setGuessesAttempts(currentGuessAttempts)
        setGuesses([...guesses, guess])

        if (currentGuessAttempts >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("loss")
        } else if (answer === guess) {
            setGameStatus("win")
        }
    }

    return <>
        <GuessResults
            guesses={guesses}
            answer={answer}
        />
        <GuessInput
            handleGuess={handleGuess}
            disabled={['win', 'loss'].includes(gameStatus)}
        />
        {gameStatus === 'win' &&
            <SuccessBanner guessesAtemps={guessesAttempts}/>}
        {gameStatus === 'loss' &&
            <LossBanner answer={answer}/>}
    </>;
}

export default Game;
