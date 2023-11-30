import { useRef } from "react";

export default function Answers({ currAnswers, selectedAnswer, answerState, onSelect }) {
  const shufleArray = useRef();

  if (!shufleArray.current) {
    shufleArray.current = [...currAnswers];
    shufleArray.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shufleArray.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let css = "";

        if (answerState === "answered" && isSelected) {
          css = "selected";
        }

        if (
          (answerState === "correct" && isSelected) ||
          (answerState === "wrong" && isSelected)
        ) {
          css = answerState;
        }

        // cannot use disabled === "answered" because answer state might be canged to correct and wrong

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={css} disabled={answerState!==''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
