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

module.exports = {
	color,
};
