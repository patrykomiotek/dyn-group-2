import { useReducer, useCallback, type KeyboardEventHandler } from "react";
import { Button, Input } from "../ui";

interface State {
  count: number;
}

enum ActionType {
  DECREMENT = "action/decrement",
  INCREMENT = "action/increment",
  SET = "action/set",
}

interface Action {
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  count: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return {
        count: state.count - 1,
      };
    case ActionType.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ActionType.SET:
      if (action.payload) {
        return {
          count: action.payload,
        };
      } else {
        return state;
      }
    default: {
      return state;
    }
  }
};

export const Stepper = () => {
  "use memo";
  // "use no memo"
  const [state, dispatch] = useReducer(reducer, initialState);

  // const decrease = useCallback(
  //   () => dispatch({ type: ActionType.DECREMENT }),
  //   []
  // );
  // const increase = useCallback(
  //   () => dispatch({ type: ActionType.INCREMENT }),
  //   []
  // );
  const decrease = () => dispatch({ type: ActionType.DECREMENT });
  const increase = () => dispatch({ type: ActionType.INCREMENT });

  const handleKeyboardDown: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    // throw new Error("Stepper Error");

    const key = event.key;
    const value = parseInt(event.currentTarget.value, 10);
    if (key === "Enter") {
      dispatch({ type: ActionType.SET, payload: value });
    }
  };

  // throw new Error("Stepper Error");

  const renderButton = () => {
    return (
      <div>
        <button>Click me</button>
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <Button onClick={decrease}>-1 </Button>
        <div>{state.count}</div>
        <Button onClick={increase}>+1 </Button>
      </div>
      <div>
        <Input label="Number" type="number" onKeyDown={handleKeyboardDown} />
      </div>
      {renderButton()}
    </div>
  );
};
