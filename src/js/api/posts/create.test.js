import { createPost } from "./create";

const TEST_TITLE = "title";
const TEST_BODY = "body";
const TEST_MEDIA = "https://dummyimage.com/600x400&text=TEST_IMG";
const TEST_TAG = "tag";
const TEST_POST = {
  title: TEST_TITLE,
  body: TEST_BODY,
  media: TEST_MEDIA,
  tag: TEST_TAG,
};

function postSuccessMock() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(TEST_POST),
  });
}

describe("create", () => {
  it("creates a post if input requirements are met", async () => {
    global.fetch = jest.fn(() => postSuccessMock());
    const result = await createPost(TEST_TITLE, TEST_BODY, TEST_BODY, TEST_TAG);
    expect(fetch).toHaveBeenCalled();
    expect(result.title).toEqual(TEST_TITLE);
    expect(result.body).toEqual(TEST_BODY);
    expect(result.media).toEqual(TEST_MEDIA);
    expect(result.tag).toEqual(TEST_TAG);
  });
});
