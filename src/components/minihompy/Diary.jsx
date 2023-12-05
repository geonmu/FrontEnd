import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "../modal/PostModal";
import { useDispatch, useSelector } from "react-redux";
import { __deleteDiary, __getDiary } from "../../redux/module/diaries";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import { useParams } from "react-router-dom";
import { Alert } from '../../shared/Alert';
import { __getComment } from "../../redux/module/comments";

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

  const onDelete = async (diaryId) => {
    try {
      await dispatch(__deleteDiary({ diaryId, param }));
    } catch (error) {
    }
  };

  return (
    
      <DiaryLayout>
        <section style={{ borderBottom: '3px solid var(--light-gray)', display: 'grid', gridTemplateColumns: '7fr 1fr'  }}>
          <span className='fontText' style={{ fontSize: 24, color: 'var(--blue)' }}>Diary</span>
          <button onClick={openModal} style={{ marginTop: '3px', height: '20px' }}>글쓰기</button>
        </section>
        <section className='scrollBar'>
          
          {diaries?.map((diary) => (
            <div key={diary.diaryId}>
              <DiaryTitle className="fontText">
                <span>No.{diary.diaryNo}&nbsp;</span>
                <span style={{color: 'var(--light-black)'}}>{diary.updatedAt.split(" ")[0]}</span>
                <button onClick={() => onDelete(diary.diaryId)}>🗑️</button>
              </DiaryTitle>
              <ImageBox>
                <img alt="postImage" style={{ maxWidth: '450px', maxHeight: '300px', margin: '15px auto 0px' }} src={diary.dirImg} />
              </ImageBox>
              <ContentBox>{diary.content}</ContentBox>
              <CommentForm diaryId={diary.diaryId} />
              <CommentList diaryId={diary.diaryId} />
            </div>
          ))}
          </section>
          <PostModal open={Modal} close={closeModal} allDiaryId={diaries} />
      </DiaryLayout>
  );
}

export default Diary;

//흰색박스

//컨텐츠 들어갈 박스
const DiaryLayout = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 30px 390px;
  row-gap: 5px;

  button {
    font-size: 0.8rem;
  }
`;

const DiaryTitle = styled.div`
  background-color: var(--light-gray);
  border-top: 1px solid var(--dark-gray);
  height: 30px;
  
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 10px;

  align-items: center;
  place-items: center;

  button {
    width: max-content;
  }
`;

const ImageBox = styled.div`
  margin: 0px auto;
  display: flex;
`;

const ContentBox = styled.div`
  width: 450px;
  margin: 10px auto;
  padding: 15px;
  display: flex;
  border: 1px solid var(--light-gray);
  border-radius: 2px;
`;