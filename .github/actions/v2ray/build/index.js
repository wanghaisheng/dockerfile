const exec = require('@actions/exec');
const version = require('../../../../v2ray/version.json');

(async function() {
  const options = {
    cwd: './v2ray',
  };
  console.log(`Build v2ray image with tag '${version.version}'.`);
  await exec.exec('docker', ['build', '-t', `tarocch1/v2ray:${version.version}`, '.'], options);
  console.log('Build v2ray image with tag \'latest\'.');
  await exec.exec('docker', ['build', '-t', 'tarocch1/v2ray:latest', '.'], options);
})();
