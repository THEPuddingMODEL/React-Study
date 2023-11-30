import QuestionTimer from "./QuestionTimer";
import Answers from "./answers";

import { useState } from "react";

import QUESTION from "../questions.js"

export default function Question({currIndex,onSelectAnswer,OnSkipAnswer}) {
    
    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    });

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect: QUESTION[currIndex].answers[0] === answer
            })

            setTimeout(()=>{

                onSelectAnswer(answer)

            }, 2000)


        }, 1000)
    }

    let answerState = ''

    // this condition is answer selcted, but only not evaluated we go in
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer){
        answerState = 'answered'
    }


  return (
    <div id="question">
      <QuestionTimer

        timeout={10000}
        onTimeOut={OnSkipAnswer}
      ></QuestionTimer>
      <h2>{QUESTION[currIndex].text}</h2>

      <Answers
        currAnswers={QUESTION[currIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      ></Answers>
    </div>
  );
}
