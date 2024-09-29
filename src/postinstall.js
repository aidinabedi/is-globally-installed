const fs = require("fs");
const path = require("path");

// NPM will automatically set npm_config_global to "true" when this packaged is installed globally
const isGloballyInstalled = process.env.npm_config_global === "true";

const indexPath = path.join(__dirname, "index.js");
const indexCode = isGloballyInstalled ? "module.exports = true;" : "module.exports = false;";
fs.writeFileSync(indexPath, indexCode);
