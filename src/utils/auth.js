const LOGIN = "Teacher";
const PASSWORD = "1234567890";

export function login(username, password) {
  if (username === LOGIN && password === PASSWORD) {
    localStorage.setItem("pdp-junior-tok", "AccessEnter");
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem("pdp-junior-tok");
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem("pdp-junior-tok"));
}
