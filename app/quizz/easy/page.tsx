'use client'
import questionsEasy from '../../assets/easy.json'
import {useState} from "react";

export default function quizzEasy(){
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('');

    return(
        <div>
            <h2>Easy Quizz</h2>
        </div>
    )
}