import {
  decrement,
  increment,
  incrementByAmount,
  reducer,
} from "./counterSlice";
import { store } from "../../store";

describe("Counter reducer", () => {
  // test()
  it("should increase value", () => {
    console.log(store.getState());
    // store.dispatch({ type: "counter/increment" });
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement()); // 2
    store.dispatch(incrementByAmount(4)); // 6
    // console.log(store.getState());

    const actualStore = store.getState();
    expect(actualStore.counter.value).toEqual(6);
    // const initialState = reducer();
  });
});
