const {exec} = require('child_process');
const fs = require('fs');
const process = require('process');
const util = require('util');

const execShellCommand = util.promisify(exec);

/**
 * This script automates the process of installing the latest version of the 
 * toolkit package in every sample extension.
 * 
 * Run `node scripts/update-toolkit-package.js` from the root directory
 * of this repository.
 * 
 * Updating the script:
 * 
 * To update this script to include a new directory, add a new call to the
 * `installLatestToolkitPackage` function within the `main` function below.
 * 
 */
async function main() {
	console.log('Updating toolkit package to latest version...');
  console.log();

  await installLatestToolkitPackage('default');
  await installLatestToolkitPackage('frameworks', 'webview-ui');

	console.log(color(['bold', 'green'], 'All extension samples updated to the latest version of the toolkit!'));
}

async function installLatestToolkitPackage(rootDir, installDir = '') {
  try {
    const dirs = getSubDirectories(rootDir);
    for (const dir of dirs) {
      const dirPath = installDir.length > 0 ? `${rootDir}/${dir}/${installDir}` : `${rootDir}/${dir}`;
      console.log(color(['dim'], `⏳ Updating toolkit in ${dir}...`));
      await execShellCommand(`cd ${dirPath} && npm i @vscode/webview-ui-toolkit@latest`);
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

const colors = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	cyan: '\x1b[36m',
};

function color(opts, text) {
	let colorString = '';
	for (const opt of opts) {
		colorString += colors[opt];
	}
	return `${colorString}${text}${colors.reset}`;
}

main();
