import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        removeCommentUserId: (state, action) => {
          state.entities = state.entities.filter((c) => c._id !== action.payload);
        },
        addCommentUserId: (state, action) => {
          state.entities.push(action.payload);
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsRequested, commentsReceived, commentsRequestFailed, removeCommentUserId, addCommentUserId } = actions;

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};
export const removeCommentId = (userId) => async (dispatch) => {
  try {
    const { content } = await commentService.removeComment(userId);
    dispatch(removeCommentUserId(content));
} catch (error) {
  dispatch(commentsRequestFailed(error.message));
}
};
export const createCommentId = (userId) => async (dispatch) => {
  try {
      const { content } = await commentService.createComment(userId);
      dispatch(addCommentUserId(content));
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
}
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
