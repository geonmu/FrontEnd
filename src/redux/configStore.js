import { configureStore } from "@reduxjs/toolkit";
import diaries from "./module/diaries";
import comments from "./module/comments";

const store = configureStore({
  reducer: { diaries, comments },
});

export default store;