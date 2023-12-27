'use client'
import questionsEasy from '../../assets/easy.json'
import {useState} from "react";


interface questionEasy {
    question: string,
    answer: string
}
export default function QuizzEasy(){
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('');
    const [success, setSuccess] = useState(undefined);
    const [alreadyAnswered, setAlreadyAnswered] = useState(false);

    // Set the answer to the state
    const handleAnswer = (event) =>{
        setAnswer(event.target.value)
    }

    // Submit the answer
    const submitAnswer = () =>{
        if(answer.toLowerCase() === questionsEasy[index].answer.toLowerCase()){
            setAnswer("")
            setScore(score +1)
            setSuccess(true)
            setAlreadyAnswered(true)
        }else{
            setSuccess(false)
            setAlreadyAnswered(true)
        }
    }
    // Next question
    const goToNextQuestion = () =>{
        setIndex( index +1)
        setSuccess(undefined)
        setAlreadyAnswered(false)
        setAnswer("")
    }

    const resetQuestions = () =>{
        setIndex(0)
    }
    return(
        <div className="flex flex-col gap-4 items-center">
            <h2 className="font-bold text-2xl">Easy Quizz</h2>
            {index < questionsEasy.length ? (
                <div className="flex flex-col gap-2 items-center">
                    <div className="my-5">
                        <p className="text-center">Question {index +1}/{questionsEasy.length}</p>
                        <p className="text-center">{ questionsEasy[index].question }</p>
                    </div>
                    <form className="flex flex-col gap-2 items-center">
                        <input type="text" name="answer" value={answer} onChange={handleAnswer} className="border-purple-900 border-2 rounded-full p-2 py-1 w-64"/>
                        <button
                            type="submit"
                            className="bg-purple-950 text-white py-1 px-3 rounded-full w-64 hover:bg-purple-800 hover:cursor-pointer disabled:bg-purple-200 disabled:hover:cursor-default"
                            disabled={alreadyAnswered || answer.trim() === ""}
                            onClick={submitAnswer}
                        >Valider</button>
                    </form>
                    <button
                        onClick={goToNextQuestion}
                        className="bg-purple-950 text-white py-1 px-3 rounded-full w-64 hover:bg-purple-800 hover:cursor-pointer disabled:bg-purple-200 disabled:hover:cursor-default"
                        disabled={!alreadyAnswered}
                    >Question Suivante</button>
                    {success === true ? (<div className="text-green-900">Bonne réponse</div>) : success === false ? (<div className="text-red-900">La bonne réponse était <strong>{questionsEasy[index].answer}</strong></div>) : ""}
                </div>
            ) : (
                <div>
                    <p>Votre score est de : { score }/{questionsEasy.length}</p>
                    <button
                        onClick={resetQuestions}
                        className="bg-purple-950 text-white py-1 px-3 rounded-full w-64 hover:bg-purple-800 hover:cursor-pointer"
                    >Recommencer</button>
                </div>
            )}

        </div>
    )
}