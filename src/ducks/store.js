import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise-middleware";

import reducer from "./reducer";

const combined = applyMiddleware(promiseMiddleWare());
const store = createStore(reducer, combined);

export default store;