import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "../modal/PostModal";
import { useDispatch, useSelector } from "react-redux";
import { __deleteDiary, __getDiary } from "../../redux/module/diaries";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Diary() {
  const [Modal, setModal] = useState(false);
  const { diaries } = useSelector((state) => state.diaries);

  const dispatch = useDispatch();
  const param = Number(useParams().userId);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const onDelete = (diaryId) => {
    const result = window.confirm("정말 삭제하시겠습니까?");
    if (!result) return;
    dispatch(__deleteDiary({ diaryId, param }));
    Swal.fire({
      icon: "success",
      title: "삭제 완료!",
    });
    dispatch(__getDiary(param));
  };

  useEffect(() => {
    dispatch(__getDiary(param));
  }, [dispatch, param]);

  return (
      <Content>
        <DiaryBox>
          <Posting>
            다이어리를 작성해 볼까요?
             <button onClick={openModal}
            />
          </Posting>
          <PostModal open={Modal} close={closeModal} allDiaryId={diaries} />
          {diaries?.map((diary) => (
            <div key={diary.diaryId}>
              <PostInfo>
                <PostDate>{diary.updatedAt.split(" ")[0]}</PostDate>
                <PostNum>No.{diary.diaryNo}</PostNum>
                <PostEditBox>
                  <button
                    onClick={() => onDelete(diary.diaryId)}
                    style={{
                      width: "40px",
                      fontSize: "0.7rem",
                      marginLeft: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    삭제
                  </button>
                </PostEditBox>
              </PostInfo>
              <DiaryImg>
                <img alt="postImage" style={{ width: "100%", height: "100%" }} src={diary.dirImg} />
              </DiaryImg>
              <PostContent>{diary.content}</PostContent>
              <CommentForm diaryId={diary.diaryId} />
              <CommentList diaryId={diary.diaryId} />
            </div>
          ))}
        </DiaryBox>
      </Content>
  );
}

export default Diary;

//흰색박스

//컨텐츠 들어갈 박스
const Content = styled.div`
  margin: 3px 0px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
  padding: 15px;
`;

const Posting = styled.div`
  width: 95%;
  margin: 10px auto auto auto;
  font-size: 0.9rem;
`;

const PostEditBox = styled.div`
  margin-left: 360px;
  margin-top: -5px;
`;

const DiaryBox = styled.div`
  width: 100%;
  height: 300px;
  margin: auto;
  padding: 5px;
  border: 1px dashed #cdd5d8;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #cdd5d8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #a3a3a3;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const PostInfo = styled.div`
  display: flex;
  margin-left: 14px;
  margin-top: 10px;
`;

const PostDate = styled.div`
  font-size: 0.8rem;
  margin-top: 10px;
`;
const PostNum = styled.div`
  margin-left: 10px;
  font-size: 0.8rem;
  margin-top: 10px;
`;

const DiaryImg = styled.div`
  width: 95%;
  height: 300px;
  margin: 5px auto;
`;

const PostContent = styled.div`
  width: 95%;
  height: 100px;
  margin: 5px auto auto auto;
  padding: 15px;
  display: flex;
  border: 1px solid #cdd5d8;
  border-radius: 10px;
  font-size: 0.8rem;
`;