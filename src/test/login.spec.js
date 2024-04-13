import { login } from "../views/auth/LoginView.vue";

describe("login", () => {
  test("credenciais corretas", () => {
    expect(login("igor", "123")).toBe(200);
  });

  test("credenciais incorretas", () => {
    expect(login(10, 10)).toBe(401);
  });
});
