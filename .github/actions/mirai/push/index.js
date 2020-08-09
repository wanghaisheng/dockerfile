const core = require('@actions/core');
const exec = require('@actions/exec');

(async function () {
  const username = core.getInput('username', { required: true });
  const accesstoken = core.getInput('accesstoken', { required: true });
  const options = {
    cwd: './mirai',
  };
  console.log(`Login to docker hub with user '${username}'.`);
  await exec.exec(
    'docker',
    ['login', '-u', username, '-p', accesstoken],
    options,
  );
  console.log("Push mirai image with tag 'latest'.");
  await exec.exec('docker', ['push', 'tarocch1/mirai:latest'], options);
})();
