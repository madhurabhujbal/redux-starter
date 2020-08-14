import * as actions from "./actionTypes"; //required only when creating an action

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug1",
    },
  };
}
