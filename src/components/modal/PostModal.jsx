import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./PostModal.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getDiary } from "../../redux/module/diaries";
import { useParams } from "react-router-dom";
import { Alert } from '../../shared/Alert';

const PostModal = (props) => {
  const SERVER = process.env.REACT_APP_SERVER;
  const { open, close, allDiaryId } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const param = useParams().userId;

  // 포스트 등록
  const onSubmit = async (data) => {
    const diaryNo = allDiaryId.length + 1;
    const content = data.content;
    const dirImg = data.dirImg[0];
    const formData = new FormData();
    formData.append("dirImg", dirImg);
    formData.append("content", content);
    formData.append("diaryNo", diaryNo);
    await axios
    .post(`${SERVER}/api/diaries/${param}`, formData, {
        withCredentials: true
      })
      .then((res) => {
        Alert({
          html: `${res.data.msg}`,
        });
      })
      .catch((e) => {
        if(e.response.data.errorMessage !== undefined) {
          Alert({
            html: `${e.response.data.errorMessage}`,
          })
        }
        else {
          Alert({
            html: `${e.response.data.err}`,
          })
        }
      });
    close();
    dispatch(__getDiary(param));
  };

  return (
    <div className={open ? "PostModal openModal modal" : "PostModal modal"}>
      {open ? (
          <section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Wrapper>
              <input
                type="file"
                id="picture"
                accept="image/*"
                {...register("dirImg", {
                  required: "이미지를 첨부해주세요.",
                })}
              />
              </Wrapper>
              <span className="errorMessage">{errors.dirImg?.message}</span>
              <Wrapper style={{ height: '100px'}}>
                <textarea
                  placeholder="내용"
                  {...register("content", {
                    required: "내용을 입력해주세요.",
                    maxLength: {
                      value: 100,
                      message: "100자 이내로 작성해주세요.",
                    },
                  })}
                />
                </Wrapper>
                <span className="errorMessage">{errors.content?.message}</span>
                
                <Wrapper style={{ height: '30px', gridTemplateColumns: '2fr 1fr', columnGap: '250px'}}>
                <button type='submit' className="primaryButton">작성</button>
                <button type='button' onClick={close}>
                  닫기
                </button>
                </Wrapper>
            </form>
        </section>
      ) : null}
    </div>
  );
};

export default PostModal;

const Wrapper = styled.div`
  display: grid;
  margin-top: 10px;

  height: 34px;
`;