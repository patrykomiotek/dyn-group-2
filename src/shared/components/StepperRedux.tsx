import { useReducer, useCallback, type KeyboardEventHandler } from "react";
import { Button, Input } from "../ui";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/features/counter/counterSlice";

export const StepperRedux = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleDecrease = () => dispatch(decrement());
  const handleIncrease = () => dispatch(increment());

  const handleKeyboardDown: KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      const key = event.key;
      const value = parseInt(event.currentTarget.value, 10);
      if (key === "Enter") {
        // dispatch({ type: ActionType.SET, payload: value });
        dispatch(incrementByAmount(value));
      }
    }, []);

  return (
    <div className="">
      <div className="flex gap-2">
        <Button onClick={handleDecrease}>-1 </Button>
        <div>{count}</div>
        <Button onClick={handleIncrease}>+1 </Button>
      </div>
      <div>
        <Input label="Number" type="number" onKeyDown={handleKeyboardDown} />
      </div>
    </div>
  );
};
