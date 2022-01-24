import axios from "axios";

const baseURL = "http://localhost:3000/memo/";

// 게시판 리스트 조회
function fetchBoardList() {
  return axios.get(baseURL);
}

// 게시판 상세 페이지
function fetchView(id) {
  return axios.get(`${baseURL}/${id}`);
}

// 게시판 생성
function fetchCreate(data) {
  return axios.post(baseURL, data);
}

// 게시판 수정
function fetchUpdate(id, data) {
  return axios.patch(`${baseURL}/${id}`, data);
}

// 게시판 삭제
function fetchDelete(id) {
  return axios.delete(`${baseURL}/${id}`);
}

export { fetchBoardList, fetchView, fetchCreate, fetchUpdate, fetchDelete };
