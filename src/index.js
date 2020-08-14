import store from "./store";

const unsubscribe = store.subscribe(() => {
  //Useful for refreshing/rerendering UI when app state changes.
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

unsubscribe(); //Useful when component is no longer in the app and we do not want notifications from store anymore.
store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState());
