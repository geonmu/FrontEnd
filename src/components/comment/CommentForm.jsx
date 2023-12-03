import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addComment, __getComment } from "../../redux/module/comments";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function CommentForm({ diaryId }) {
  const [input, setInput] = useState({
    comment: "",
  });
  const param = Number(useParams().userId);

  const dispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    if (input.comment.trim() === "") return alert("댓글을 입력해주세요!");
    dispatch(__addComment({ ...input, diaryId, param }));
    Swal.fire({
      icon: "success",
      title: "작성 완료!",
    });
    dispatch(__getComment(param));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <CommentInputBox>
      <form onSubmit={Submit}>
        <Commentinput name="comment" value={input.comment} onChange={onChange} placeholder="댓글을 작성해주세요." />
        <CommentSave>
            <button></button>
        </CommentSave>
      </form>
    </CommentInputBox>
  );
}

export default CommentForm;

const CommentInputBox = styled.div`
  width: 95%;
  height: 30px;
  margin: 5px auto auto auto;
  padding: 5px;
  font-size: 0.8rem;
`;

const Commentinput = styled.input`
  width: 90%;
  height: 20px;
  border: none;
  font-size: 0.7rem;
  vertical-align: middle;
`;

const CommentSave = styled.button`
  width: 45px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
`;