const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

// Get latest tag
const latestTag = execSync("git describe --tags --abbrev=0").toString().trim();
const version = latestTag.replace(/^v/, ""); // remove v prefix

console.log(`🔍 Using version from tag: ${version}`);

// Update capacitor.config.json
const capConfigPath = path.join(__dirname, "..", "capacitor.config.json");
const capConfig = require(capConfigPath);
capConfig.version = version;
fs.writeFileSync(capConfigPath, JSON.stringify(capConfig, null, 2));

// Update package.json
const pkgPath = path.join(__dirname, "..", "package.json");
const pkg = require(pkgPath);
pkg.version = version;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`✅ Version updated to ${version} in both capacitor.config.json and package.json`);
