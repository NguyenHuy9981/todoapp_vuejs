export default function authHeader() {
  let token = localStorage.getItem("token");
  if (token) {
    return { auth_token: token };
  } else {
    return {};
  }
}
