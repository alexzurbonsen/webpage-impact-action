const core = require("@actions/core");
const github = require("@actions/github");

try {
  const url = core.getInput("url");
} catch (error) {
  core.setFailed(error.message);
}
