import { forwardRef, useRef } from "react";

const Input = forwardRef(function Input(
  { labelName, textarea, ...props },
  ref
) {
  // addding the props into the textarea or input, will make it fully configurable

  const classes =
    "p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {labelName}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
