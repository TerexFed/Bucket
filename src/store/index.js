import { combineReducers, createStore } from "redux";
import { bucketReducer } from "./BucketReducer";

const rootReducer = combineReducers({
    bucket: bucketReducer
})

export const store = createStore(rootReducer)