const core = require('@actions/core');
const github = require('@actions/github');
const repoName = 'githubscripting'
const repoOwner = 'fiddlermikey'

async function run() {
  console.log("Begin")
  try {
    const octokit = github.getOctokit(env.GITHUB_TOKEN);
    var commitMessages = ""
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();

