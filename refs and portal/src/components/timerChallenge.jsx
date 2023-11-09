import { useRef, useState } from "react";

import ResultModal from "./Resultmodal";

export default function TimerChallenge({ title, targetTime }) {

  //   When you call the startGame function, it sets a timer using setTimeout. However, the timer variable is a local variable in the function, and it's subject to closure.

  // The setTimeout callback function captures the timer variable within its closure, but at the time the setTimeout is called, React's state updates are not guaranteed to be synchronous.

  // Because of the asynchronous nature of React state updates, the setTimerStarted(true) line may not immediately update the timerStarted state to `true.

  // When you click the "Stop" button, the stopGame function calls clearTimeout(timer), but the timer variable within the setTimeout closure may still reference the old value of timer (before it was updated by setTimeout) because the closure captures the value of timer when the setTimeout was originally called.

  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000

  if(timeRemaining<=0){
    clearInterval(timer.current)
    // re setting state to original, might cause an inifinite loop
    //setTimeRemaining(targetTime*1000)
    dialog.current.open()
  }

  function startGame() {
    timer.current = setInterval(() => {
    //   setIsExpired(true);
    //   dialog.current.open();
        
    setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10)
    }, 10);

    setTimerStarted(true);
  }

  function stopGame() {
    clearTimeout(timer.current);
    dialog.current.open()
  }

  function handleReset(){
    setTimeRemaining(targetTime*1000)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>

      <ResultModal
        ref={dialog}
        remainingTime = {timeRemaining}
        targetTime={targetTime}
        OnReset={handleReset}
      ></ResultModal>

      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeIsActive ? stopGame : startGame}>
          {" "}
          {timeIsActive ? "Stop" : "Start"}challenge
        </button>
      </p>
      <p className={timeIsActive ? "active" : undefined}>
        {timeIsActive  ? "Timer is runnings" : "Timer inactive"}
      </p>
    </section>
  );
}
