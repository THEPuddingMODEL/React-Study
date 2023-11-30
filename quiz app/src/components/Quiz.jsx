import QUESTIONS from "../questions";
import finishImg from "../assets/quiz-complete.png";
import Question from "./Question";

import { useCallback, useRef, useState } from "react";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  //const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex = userAnswer.length;
  //answerState === "" ? userAnswer.length : userAnswer.length - 1;
  // this userAnswer will be only updated from Question, previsouly, contained logic for question, thats why need to remedy

  //   need to add a timer (interval maybe), set new state every few seconds

  //   but need to use progress

  //   timer resets

  //   need a ref to close the exact timer, otherwise will get lost
  //   but how

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={finishImg} alt="quiz finish logo" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    userCurrAnswer
  ) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, userCurrAnswer];
    });
  },
  []);

  // we need to add useCaalback to the handleSelect answer because it will trigger update and add new timer
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // adding a key means, if the key is changed, then the whole component will be re-rendered

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        currIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        OnSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
