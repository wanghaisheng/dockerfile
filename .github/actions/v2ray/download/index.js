const exec = require('@actions/exec');
const version = require('../../../../v2ray/version.json');

(async function () {
  const options = {
    cwd: './v2ray',
  };
  console.log(`Download v2ray ${version.version} from ${version.url}.`);
  await exec.exec('wget', ['-O', 'v2ray.zip', version.url], options);
  console.log("Unzip v2ray.zip to folder 'v2ray'.");
  await exec.exec('unzip', ['v2ray.zip', '-d', 'v2ray'], options);
})();
