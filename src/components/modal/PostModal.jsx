import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./PostModal.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getDiary } from "../../redux/module/diaries";
import { useParams } from "react-router-dom";
import { getCookie } from "../../shared/Cookies";
import Swal from "sweetalert2";

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

  const [imagePreview, setImagePreview] = useState("");
  const image = watch("dirImg");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  // 포스트 등록
  const onSubmit = async (data) => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    const diaryNo = allDiaryId.length + 1;
    const content = data.content;
    const dirImg = data.dirImg[0];
    const formData = new FormData();
    formData.append("dirImg", dirImg);
    formData.append("content", content);
    formData.append("diaryNo", diaryNo);
    await axios
    .post(`${SERVER}/api/diaries/${param}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          accessToken,
          refreshToken,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `${res.data.msg}`,
        });
      })
      .catch((e) => {
        console.log("e", e);
        Swal.fire({
          icon: "error",
          title: `${e.response.data.err}`,
        });
      });
    close();
    dispatch(__getDiary(param));
  };

  return (
    <div className={open ? "PostModal openModal modal" : "PostModal modal"}>
      {open ? (
        <section>
          <main>
            <form onSubmit={handleSubmit(onSubmit)}>
              <img alt="preview" src={imagePreview} style={{ maxWidth: "400px", marginRight: "9999px" }} />
              <UploadLabel htmlFor="picture">업로드</UploadLabel>
              <ImageInput
                type="file"
                id="picture"
                accept="image/*"
                {...register("dirImg", {
                  required: "이미지를 올리셔야 합니다!",
                })}
              />
              <InputBox>
                <DiaryInput
                  type="text"
                  placeholder="내용을 입력해주세요."
                  {...register("content", {
                    required: "내용을 입력해주세요!",
                    maxLength: {
                      value: 100,
                      message: "100자 이내로 작성해주세요",
                    },
                  })}
                />
                <InputButton>작성</InputButton>
                <span style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>{errors.content?.message}</span>
                <span style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>{errors.dirImg?.message}</span>
              </InputBox>
            </form>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PostModal;

const UploadLabel = styled.label`
  width: 70px;
  height: 30px;
  display: inline-block;
  margin: 5px auto auto auto;
  padding: 9px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  background-color: lightblue;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: #000000;
    transition: 0.8s;
  }
`;

const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const InputBox = styled.div``;

const DiaryInput = styled.input`
  width: 354px;
  padding: 5px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const InputButton = styled.button`
  width: 54px;
  height: 30px;
  margin-left: 10px;
  margin-top: 19.5px;
  border-radius: 5px;
  position: fixed;
  background-color: lightblue;
  vertical-align: middle;
  color: #ffffff;
  font-size: 0.8rem;

  :hover {
    background-color: #ffffff;
    color: #000000;
    transition: 0.8s;
  }
`;