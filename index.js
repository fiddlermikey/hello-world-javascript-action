const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const rName = github.context.repo.repo;
  const bName = github.context.ref;
  console.log(`The repo name: ${rName}`);
  console.log(`The repo ref name: ${bName}`);
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("rName", rName);
  core.setOutput("bName", bName);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  //const pulls = github.context.repo.pulls.list({
  //  owner: repoOwner,
  //  repo: repoName,
  //  state: 'closed'
  //});
  //const lastPull = pulls.data[0].id;
  //const lastPullTitle = pulls.data[0].title;
  //const lastPullNum = pulls.data[0].number;

  //const pullCommits = github.context.pulls.listCommits({
  //  owner: repoOwner,
  //  repo: repoName,
  //  pull_number: lastPullNum
  //})

  //const latestRelease = github.context.repos.getLatestRelease({
  //  owner: repoOwner,
  //  repo: repoName

  //})
  
} catch (error) {
  core.setFailed(error.message);
}