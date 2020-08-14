let lastId = 0;

function reducer(state = [], action) {
  //Setting initial state to [], else when app is started and Redux calls the reducer, state is undefined.
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
