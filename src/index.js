import store from "./store";
import * as actions from "./actionTypes";

const unsubscribe = store.subscribe(() => {
  //Useful for refreshing/rerendering UI when app state changes.
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

unsubscribe(); //Useful when component is no longer in the app and we do not want notifications from store anymore.
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
