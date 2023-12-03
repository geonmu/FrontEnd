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
      <HomeLayout>
        <section style={{ borderBottom: '3px solid var(--light-gray)' }}>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>Diary</span>
          <button onClick={openModal} />
        </section>
        <section>
          
        </section>
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
      </HomeLayout>
  );
}

export default Diary;

//흰색박스

//컨텐츠 들어갈 박스
const HomeLayout = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 30px 390px;
  row-gap: 5px;
  overflow-y: scroll;
`;

const PostEditBox = styled.div`
  margin-left: 360px;
  margin-top: -5px;
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