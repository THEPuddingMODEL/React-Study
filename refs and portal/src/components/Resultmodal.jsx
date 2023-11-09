import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, OnReset},
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime<=0
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100)

  // the ref wew passed in, refers to this iuseImperative under the hood
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
    {!userLost&& <h2>Your score: {score}</h2>}
      {userLost&&<h2>You Lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>
      </p>

      <form method="dialog" onSubmit={OnReset}>
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
