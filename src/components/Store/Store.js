import { createStore } from "redux";

//state

const initialState = {
    isFormOpen: false,
    isConfirmWindowOpen: false,
    isPersonnalDataFormOpen: false,
    isLegalFormOpen: false,
};

// actions creators

export const openForm = () => ({ type: "openForm" });

export const closeForm = () => ({ type: "closeForm" });

export const openConfirmWindow = () => ({ type: "openConfirmWindow" });

export const closeConfirmWindow = () => ({ type: "closeConfirmWindow" });

export const openPersonnalDataForm = () => ({ type: "openPersonnalDataForm" });

export const closePersonnalDataForm = () => ({ type: "closePersonnalDataForm" });

export const openLegalForm = () => ({ type: "openLegalForm" });

export const closeLegalForm = () => ({ type: "closeLegalForm" });


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

  if (action.type === "openPersonnalDataForm") {
    return {
      ...state,
      isPersonnalDataFormOpen: true,
    };
  }

  if (action.type === "closePersonnalDataForm") {
    return {
      ...state,
      isPersonnalDataFormOpen: false,
    };
  }

  if (action.type === "openLegalForm") {
    return {
      ...state,
      isLegalFormOpen: true,
    };
  }

  if (action.type === "closeLegalForm") {
    return {
      ...state,
      isLegalFormOpen: false,
    };
  }

  return state;
}

export const store = createStore(reducer);