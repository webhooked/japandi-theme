const fs = require("node:fs");
const path = require("node:path");
const generate = require("./generate");

const THEME_DIR = path.join(__dirname, "..", "theme");

if (!fs.existsSync(THEME_DIR)) {
	fs.mkdirSync(THEME_DIR);
}

module.exports = async () => {
	const { base, soft } = await generate();

	return Promise.all([
		fs.promises.writeFile(
			path.join(THEME_DIR, "japandi.json"),
			JSON.stringify(base, null, 4),
		),
	]);
};

if (require.main === module) {
	module.exports();
}
