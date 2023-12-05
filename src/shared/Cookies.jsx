import { Cookies } from 'react-cookie';
import { decodeToken } from 'react-jwt';

const cookies = new Cookies();

// 로그인 시 사용자 정보를 담은 쿠키를 생성한다
export const setCookie = (name, value, option) => {
  // return cookies.set(name, value, { ...option });

  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 현재 시간에 7일(일 단위)을 더함

  const defaultOptions = {
    expires: expirationDate,
    path: '/', // 쿠키의 경로 설정 (루트 경로)
    // 다른 설정들도 필요한 경우 여기에 추가할 수 있습니다.
  };

  const mergedOptions = { ...defaultOptions, ...option };

  return cookies.set(name, value, mergedOptions);
};

// 사용자 인증이 필요한 데이터를 요청할 때 쿠키를 가져온다
export const getCookie = (name) => {
  return cookies.get(name);
};

//쿠키를 지운다
export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const decodeCookie = (name) => {
  return decodeToken(getCookie(name));
};