import { combineReducers } from "redux";

import reducer from "./posts";

// Note: Don't call the reducer here, just import it

export default combineReducers({
  posts: reducer, // Use the reducer in the combineReducers configuration
});
