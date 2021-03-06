import store from "./store";
import { bugAdded, bugResolved } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
  //subscribe method returns a function to unsubscribe from the store
  //Useful for refreshing/rerendering UI when app state changes.
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// unsubscribe(); //Useful when component is no longer in the app and we do not want notifications from store anymore.
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
// console.log(store.getState());
