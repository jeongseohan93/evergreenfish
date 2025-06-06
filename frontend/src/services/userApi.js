import axios from "axios";

export async function loginUser({ email, password }) {
  const res = await axios.post("http://localhost:8002/auth/login", { email, password });
  return res.data; // axios는 이미 JSON 파싱해서 data에 담아줌
}

export async function searchApi(keyword) {
  const res = await axios.get("http://localhost:8002/api/search", {
    params: { keyword }
  });
  return res.data;
}

export async function register(form) {
  return await axios.post("http://localhost:8002/auth/register", form);
}

export async function idcheck( { email }){
  const res = await axios.post("http://localhost:8002/auth/idcheck", {
    email
  });
  return res.data;
};
