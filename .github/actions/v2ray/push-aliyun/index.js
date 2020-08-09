const core = require('@actions/core');
const exec = require('@actions/exec');
const version = require('../../../../v2ray/version.json');

(async function () {
  const username = core.getInput('username', { required: true });
  const password = core.getInput('password', { required: true });
  const options = {
    cwd: './v2ray',
  };
  console.log(`Login to aliyun docker registry with user '${username}'.`);
  await exec.exec(
    'docker',
    [
      'login',
      '-u',
      username,
      '-p',
      password,
      'registry.cn-hongkong.aliyuncs.com',
    ],
    options,
  );
  console.log("Create tag 'latest'.");
  await exec.exec(
    'docker',
    [
      'tag',
      `tarocch1/v2ray:latest`,
      'registry.cn-hongkong.aliyuncs.com/tarocch1/v2ray:latest',
    ],
    options,
  );
  console.log("Push v2ray image with tag 'latest'.");
  await exec.exec(
    'docker',
    ['push', 'registry.cn-hongkong.aliyuncs.com/tarocch1/v2ray:latest'],
    options,
  );
})();
