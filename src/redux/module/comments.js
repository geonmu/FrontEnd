import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/Cookies";

const SERVER = process.env.REACT_APP_SERVER;

const accessToken = getCookie("accessToken");
const refreshToken = getCookie("refreshToken");

// 댓글 추가
export const __addComment = createAsyncThunk("comments/addComment", async (payload, thunkApi) => {
  try {
    const { data } = await axios.post(`${SERVER}/api/diaries/comments/${payload.diaryId}/${payload.param}`, payload, { withCredentials: true });
    return thunkApi.fulfillWithValue(data.data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

// 댓글 불러오기
export const __getComment = createAsyncThunk("comments/getComment", async (payload, thunkApi) => {
  try {
    const { data } = await axios.get(`${SERVER}/api/diaries/comments/${payload}`, { withCredentials: true });
    return thunkApi.fulfillWithValue(data.data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

// 댓글 삭제
export const __deleteComment = createAsyncThunk("comments/deleteComment", async (payload, thunkApi) => {
  try {
    await axios.delete(`${SERVER}/api/diaries/comments/${payload.diaryId}/${payload.commentId}`, { withCredentials: true });
    return thunkApi.fulfillWithValue(payload);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

// 댓글 수정
export const __editSave = createAsyncThunk("comments/editSave", async (payload, thunkApi) => {
  try {
    const { data } = await axios.put(`${SERVER}/api/diaries/comments/${payload.diaryId}/${payload.commentId}`, payload, { withCredentials: true });
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((comment) => comment.diaryId !== action.payload);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editSave.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.comments.findIndex((comment) => comment.diaryId === action.payload);
      state.comments[idx] = action.payload;
    },
  },
});

export default commentsSlice.reducer;