import { useContext, useReducer } from "react";
import { createContext } from "react";

const initialState = { balance: 0, userName: "", nationalID: "" };
const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "depoit":
      return { balance: balance + action.payload, ...state };
    case "updateUserData":
      return {
        ...state,
        userName: action.payload.userName,
        nationalID: action.payload.nationalID,
      };
    default:
      throw new Error("Case Unhandled");
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useData() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}
