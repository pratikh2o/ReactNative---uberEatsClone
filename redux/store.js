import { createStore } from "redux";

import reducer from "./reducers/indexx";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
