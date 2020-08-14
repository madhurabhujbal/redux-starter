let lastId = 0;

function reducer(state = [], action) {
  //Setting initial state to [], else when app is started and Redux calls the reducer, state is undefined.
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id);

  return state;
}
