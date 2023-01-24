import { logout } from "./logout";
import { LocalStorageMock } from "../../test/mocks/localStorageMock";

global.localStorage = new LocalStorageMock();

const TEST_TOKEN = "d34rFR0z3nY0GhuRtY0u4r3Th3C3l3ry0fD3Ss3rTs";

describe("logout", () => {
  it("removes the token from localStorage", () => {
    global.localStorage.setItem("token", TEST_TOKEN);
    expect(global.localStorage.getItem("token")).toEqual(TEST_TOKEN);
    logout();
    const POST_TEST_TOKEN = global.localStorage.getItem("token");
    expect(POST_TEST_TOKEN).toEqual(null);
  });
});
