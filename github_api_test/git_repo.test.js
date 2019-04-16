const axios = require("axios");
const callGit = require("./git_repo");
jest.mock("axios");

//your test goes in here...
test("should at least console.log the damn data", async function() {
  let returnedValue = await callGit("Rukeeo1");
  console.log(returnedValue);
  expect(returnedValue).toContain("repo");
  expect(returnedValue).toContain("wed_project");
  expect(returnedValue).not.toContain("aklsljklasdf");
});
