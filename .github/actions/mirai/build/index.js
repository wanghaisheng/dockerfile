const exec = require('@actions/exec');

(async function () {
  const options = {
    cwd: './mirai',
  };
  console.log("Build mirai image with tag 'latest'.");
  await exec.exec(
    'docker',
    ['build', '-t', 'tarocch1/mirai:latest', '.'],
    options,
  );
})();
