const LOGIN = "asilbek";
const PASSWORD = "937550412";

export function login(username, password) {
  if (username === LOGIN && password === PASSWORD) {
    localStorage.setItem("pdp-junior-token", "logged-in");
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem("pdp-junior-token");
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem("pdp-junior-token"));
}
