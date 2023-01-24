import { login } from "./login";
import { LocalStorageMock } from "../../test/mocks/localStorageMock";

global.localStorage = new LocalStorageMock();

const TEST_EMAIL = "ronSwanson@noroff.no";
const TEST_PASSWORD = "bacon1337";
const TEST_NAME = "Ron Swanson";
const TEST_TOKEN = "d34rFR0z3nY0GhuRtY0u4r3Th3C3l3ry0fD3Ss3rTs";
const TEST_PROFILE = {
  name: TEST_NAME,
  email: TEST_EMAIL,
  accessToken: TEST_TOKEN,
};

function fetchSuccessMock() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(TEST_PROFILE),
  });
}

describe("login", () => {
  it("adds a token to localStorage when user successfully logs in", async () => {
    global.fetch = jest.fn(() => fetchSuccessMock());
    const result = await login(TEST_EMAIL, TEST_PASSWORD);
    expect(result).toEqual(TEST_PROFILE);
    expect(JSON.parse(global.localStorage.getItem("token"))).toEqual(
      TEST_TOKEN
    );
  });
});
