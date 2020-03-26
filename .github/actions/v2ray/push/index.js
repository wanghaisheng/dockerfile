const core = require('@actions/core');
const exec = require('@actions/exec');
const version = require('../../../../v2ray/version.json');

(async function() {
  const username = core.getInput('username', { required: true });
  const password = core.getInput('password', { required: true });
  const options = {
    cwd: './v2ray',
  };
  console.log(`Login to docker hub with user '${username}'.`);
  await exec.exec('docker', ['login', '-u', username, '-p', password], options);
  console.log(`Build v2ray image with tag '${version.version}'.`);
  await exec.exec('docker', ['push', `tarocch1/v2ray:${version.version}`], options);
  console.log("Push v2ray image with tag 'latest'.");
  await exec.exec('docker', ['push', 'tarocch1/v2ray:latest'], options);
})();
