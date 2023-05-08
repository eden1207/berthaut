import { createStore } from "redux";

//state

const initialState = {
    isFormOpen: false,
    isConfirmWindowOpen: false,
};

// actions creators

export const openForm = () => ({ type: "openForm" });

export const closeForm = () => ({ type: "closeForm" });

export const openConfirmWindow = () => ({ type: "openConfirmWindow" });

export const closeConfirmWindow = () => ({ type: "closeConfirmWindow" });


function reducer(state = initialState, action) {
  if (action.type === "openForm") {
    return {
      ...state,
      isFormOpen: true,
    };
  }

  if (action.type === "closeForm") {
    return {
      ...state,
      isFormOpen: false,
    };
  }

  if (action.type === "openConfirmWindow") {
    return {
      ...state,
      isConfirmWindowOpen: true,
    };
  }

  if (action.type === "closeConfirmWindow") {
    return {
      ...state,
      isConfirmWindowOpen: false,
    };
  }

  return state;
}

export const store = createStore(reducer);