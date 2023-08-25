import { createStore } from "redux";

//state

const initialState = {
    isFormOpen: false,
    isConfirmWindowOpen: false,
    isPersonnalDataFormOpen: false,
    isLegalFormOpen: false,
    tabIndexPage: 0,
    tabIndexPersonnalDataForm: -1,
    tabIndexLegalForm: -1,
    tabIndexForm: -1,
    tabIndexConfirmWindow: -1,
    ariaHiddenPage: false,
    ariaHiddenPersonnalDataForm: true,
    ariaHiddenLegalForm: true,
    ariaHiddenForm: true,
    ariaHiddenConfirmWindow: true,
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
      tabIndexPage: -1,
      tabIndexForm: 0,
      ariaHiddenPage: true,
      ariaHiddenForm: false,
    };
  }

  if (action.type === "closeForm") {
    return {
      ...state,
      isFormOpen: false,
      tabIndexPage: 0,
      tabIndexForm: -1,
      ariaHiddenPage: false,
      ariaHiddenForm: true,
    };
  }

  if (action.type === "openConfirmWindow") {
    return {
      ...state,
      isConfirmWindowOpen: true,
      tabIndexPage: -1,
      tabIndexConfirmWindow: 0,
      ariaHiddenPage: true,
      ariaHiddenConfirmWindow: false,
    };
  }

  if (action.type === "closeConfirmWindow") {
    return {
      ...state,
      isConfirmWindowOpen: false,
      tabIndexPage: 0,
      tabIndexConfirmWindow: -1,
      ariaHiddenPage: false,
      ariaHiddenConfirmWindow: true,
    };
  }

  if (action.type === "openPersonnalDataForm") {
    return {
      ...state,
      isPersonnalDataFormOpen: true,
      tabIndexPage: -1,
      tabIndexPersonnalDataForm: 0,
      ariaHiddenPage: true,
      ariaHiddenPersonnalDataForm: false,
    };
  }

  if (action.type === "closePersonnalDataForm") {
    return {
      ...state,
      isPersonnalDataFormOpen: false,
      tabIndexPage: 0,
      tabIndexPersonnalDataForm: -1,
      ariaHiddenPage: false,
      ariaHiddenPersonnalDataForm: true,
    };
  }

  if (action.type === "openLegalForm") {
    return {
      ...state,
      isLegalFormOpen: true,
      tabIndexPage: -1,
      tabIndexLegalForm: 0,
      ariaHiddenPage: true,
      ariaHiddenLegalForm: false,
    };
  }

  if (action.type === "closeLegalForm") {
    return {
      ...state,
      isLegalFormOpen: false,
      tabIndexPage: 0,
      tabIndexLegalForm: -1,
      ariaHiddenPage: false,
      ariaHiddenLegalForm: true,
    };
  }

  return state;
}

export const store = createStore(reducer);