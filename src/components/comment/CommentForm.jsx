import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addComment, __getComment } from "../../redux/module/comments";
import { useParams } from "react-router-dom";
import { Alert } from "../../shared/Alert";

function CommentForm({ diaryId }) {
  const [input, setInput] = useState({
    comment: "",
  });
  const param = Number(useParams().userId);

  const dispatch = useDispatch();

  const Submit = async (e) => {
    e.preventDefault();
    if (input.comment.trim() === "") return Alert({html: '댓글을 작성해주세요.'});
    try {
      await dispatch(__addComment({ ...input, diaryId, param }));
      dispatch(__getComment(param));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
      <CommentFormLayout onSubmit={Submit}>
        <input name="comment" maxLength={20} value={input.comment} onChange={onChange} placeholder="댓글" />
        <button type='submit'>작성</button>
      </CommentFormLayout>
  );
}

export default CommentForm;

const CommentFormLayout = styled.form`
  display: grid;
  grid-template-columns: 7fr 1fr;
  column-gap: 10px;
  width: 480px;
  height: 30px;
  margin: 15px auto auto auto;
`;