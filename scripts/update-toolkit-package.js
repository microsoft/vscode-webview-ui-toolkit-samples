const {color} = require('./helpers');
const {exec} = require('child_process');
const fs = require('fs');
const process = require('process');
const util = require('util');

const execShellCommand = util.promisify(exec);

/**
 * This script updates the toolkit package to the latest version in
 * every sample extension.
 */
async function main() {
	console.log('Updating toolkit package to latest version...');
  console.log();

  await updateToolkitPackage('default');
  await updateToolkitPackage('react', 'webview-ui');

	// Print success and next steps messages
	console.log();
	console.log(color(['bold', 'green'], 'All extension samples updated to the latest version of the toolkit!'));
}

async function updateToolkitPackage(rootDir, installDir = '') {
  try {
    const dirs = getSubDirectories(rootDir);
    for (const dir of dirs) {
      const dirPath = installDir.length > 0 ? `${rootDir}/${dir}/${installDir}` : `${rootDir}/${dir}`;
      console.log(color(['dim'], `⏳ Updating toolkit in ${dir}...`));
      await execShellCommand(`cd ${dirPath} && npm uninstall @vscode/webview-ui-toolkit && npm i @vscode/webview-ui-toolkit@latest`);
      console.log(color(['dim'], `✅ Latest toolkit package installed in ${dir}!`));
      console.log();
    }
  } catch (err) {
    console.log(`${color(['red'], 'Error: Could not update toolkit package to latest version')}\n    ${err}`);
    process.exit();
  }
}

function getSubDirectories(source) {
  const dirContent = fs.readdirSync(source, { withFileTypes: true });
  const subDirectoryList = dirContent.filter(content => content.isDirectory()).map(dir => dir.name);
  return subDirectoryList;
}

main();
