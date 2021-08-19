import { State } from "./initialState";

export type Action = {
  type: "SET_ERROR";
  error: State["error"];
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      throw new Error("Bad action type");
  }
};
