import React, { createContext, useReducer } from "react";
import update from 'react-addons-update';

const initialState = {
  previousStep: 0,
  data: [],
  selections: [],
  beerSelections: [0, 0, 0, 0, 0, 0, 0], 
  micro1: {},
  micro2: {},
  selectedPack: 0,
  craftOptions: {},
  nonAlcohol: 0,
  menuId: 0,
};

export const AppContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-data":
      return {
        ...state,
        data: action.value,
      };

    case "receive-selections":
      return {
        ...state,
        selections: action.value,
      };

    case "add-selection":
      return {
        ...state,
        selections: [...state.selections, action.value],
      };

      // case "add-beer-selection":
      // return {
      //   ...state,
      //   beerSelections: [...state.beerSelections, action.value],
      // };

      case "add-beer-selection":
        return update(state, { 
          beerSelections: { 
            [action.id]: {
              $set: action.payload
            }
          }
        });

    case "add-pack":
      return {
        ...state,
        selectedPack: action.value,
      };

    case "remove-selection":
      return {
        ...state,
        selections: state.selections.filter(
          (selection) => selection.id !== action.value
        ),
      };

      // case "remove-beer-selection":
      //   return {
      //     ...state,
      //     beerSelections: state.beerSelections.filter(
      //       (selection) => selection.id !== action.value
      //     ),
      //   };

      case "remove-beer-selection":
      return update(state, { 
        beerSelections: { 
          [action.id]: {
            $set: 0
          }
        }
      });
  

    case "filter-selections":
      return {
        ...state,
        selections: state.selections.filter(
          (selection) =>
            selection.attributes &&
            selection.attributes.category &&
            selection.attributes.category !== action.value
        ),
      };

    case "add-micro1":
      return {
        ...state,
        micro1: action.value,
      };

    case "add-micro2":
      return {
        ...state,
        micro2: action.value,
      };

    case "add-nonAlcohol":
      return {
        ...state,
        nonAlcohol: action.value,
      };

    case "remove-micro1":
      return {
        ...state,
        micro1: {},
      };

    case "remove-micro2":
      return {
        ...state,
        micro2: {},
      };

    case "add-step":
      return {
        ...state,
        previousStep: action.value,
      };
    case "receive-craftOptions":
      return {
        ...state,
        craftOptions: action.value,
      };

    case "receive-pack":
      return {
        ...state,
        selectedPack: action.value,
      };

    case "get-menuId":
      return {
        ...state,
        menuId: action.value,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveData = (value) => {
    dispatch({
      type: "receive-data",
      value: value,
    });
  };

  const receiveSelections = (value) => {
    dispatch({
      type: "receive-selections",
      value: value,
    });
  };

  const addSelection = (value) => {
    dispatch({
      type: "add-selection",
      value: value,
    });
  };

  const removeSelection = (value) => {
    dispatch({
      type: "remove-selection",
      value: value,
    });
  };

  const addBeerSelection = (id, payload) => {
    dispatch({
      type: "add-beer-selection",
      id: id,
      payload: payload,
    });
  };

  const removeBeerSelection = (id) => {
    dispatch({
      type: "remove-beer-selection",
      id: id,
    });
  };

  const filterSelections = (value) => {
    dispatch({
      type: "filter-selections",
      value: value,
    });
  };
  const addPack = (value) => {
    dispatch({
      type: "add-pack",
      value: value,
    });
  };

  const addMicro01 = (value) => {
    dispatch({
      type: "add-micro1",
      value: value,
    });
  };

  const addMicro02 = (value) => {
    dispatch({
      type: "add-micro2",
      value: value,
    });
  };

  const addNonAlcohol = (value) => {
    dispatch({
      type: "add-nonAlcohol",
      value: value,
    });
  };

  const removeMicro01 = () => {
    dispatch({
      type: "remove-micro1",
    });
  };
  const removeMicro02 = () => {
    dispatch({
      type: "remove-micro2",
    });
  };

  const addPreviousStep = (value) => {
    dispatch({
      type: "add-step",
      value: value,
    });
  };
  const receiveCraftOptions = (value) => {
    dispatch({
      type: "receive-craftOptions",
      value: value,
    });
  };

  const receivePack = (value) => {
    dispatch({
      type: "receive-pack",
      value: value,
    });
  };

  const getMenuId = (value) => {
    dispatch({
      type: "get-menuId",
      value: value,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        actions: {
          receiveData,
          receiveSelections,
          addSelection,
          removeSelection,
          addBeerSelection,
          removeBeerSelection,
          removeMicro01,
          removeMicro02,
          addMicro01,
          addMicro02,
          addNonAlcohol,
          addPreviousStep,
          addPack,
          receivePack,
          receiveCraftOptions,
          filterSelections,
          getMenuId,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
