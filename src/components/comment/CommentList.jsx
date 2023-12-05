import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __deleteComment, __editSave, __getComment } from "../../redux/module/comments";
import { useParams } from "react-router-dom";
import { Alert } from '../../shared/Alert';

function CommentList({ diaryId }) {
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState({
    comment: "",
  });
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const param = Number(useParams().userId);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onDelete = async (commentId) => {
    try {
      await dispatch(__deleteComment({ commentId, diaryId }));
      dispatch(__getComment(param));
    } catch (error) {
    }
  };
  
  const onEdit = () => {
    setDisable(false);
  };
  
  const EditSave = async (commentId) => {
    try {
      await dispatch(__editSave({ commentId, diaryId, ...input }));
      setDisable(true);
      dispatch(__getComment(param));
    } catch (error) {
    }
  };


  return (
    <CommentListBox>
      {comments?.map((comm) =>
        comm.diaryId === diaryId ? (
          <CommentBox key={comm.commentId}>
            <input readOnly value={comm.name}></input>
            <input onChange={onChange} name='comment' placeholder={comm.comment} value={input.comment} disabled={disable} />
            {/* 
            {disable ? (
              <button onClick={onEdit}>수정</button>
            ) : (
              <button  onClick={() => {
                EditSave(comm.commentId);
              }}
              >저장</button>
            )}
            */}
            {disable ? (
                <button
                  onClick={() => {onDelete(comm.commentId);}}
                >삭제</button>
            ) : (
                <button
                  onClick={() => {
                    setInput(comm.comment);
                    setDisable(true);
                  }}
                >취소</button>
            )}
          </CommentBox>
        ) : null
      )}
    </CommentListBox>
  );
}

export default CommentList;

const CommentListBox = styled.div`
  margin: 0px auto;
  display: grid;
  width: 490px;
  margin-bottom: 30px;
`;

const CommentBox = styled.div`
  display: grid;
  padding: 0px 15px;
  grid-template-columns: 3fr 12fr 2fr;
  column-gap: 5px;
  align-items: center;

  height: 30px;
  background-color: var(--light-gray);
  border-radius: 5px;
  margin-top: 5px;
  
  input {
    font-size: 0.8rem;
    height: 18px;
  }
  span {
    font-weight: 700;
    color: var(--blue);
  }

  button {
    height: 20px;
  }
`;