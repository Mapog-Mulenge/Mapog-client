const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

// Get latest tag
const latestTag = execSync("git describe --tags --abbrev=0").toString().trim();
const version = latestTag.replace(/^v/, ""); // remove v prefix

// Get commit count since tag
const commitCount = execSync(`git rev-list ${latestTag}..HEAD --count`).toString().trim() || "0";
const buildNumber = commitCount === "0" ? "1" : commitCount;

console.log(`🔍 Version: ${version}, Build Number: ${buildNumber}`);

// Update capacitor.config.json
const capConfigPath = path.join(__dirname, "..", "capacitor.config.json");
const capConfig = require(capConfigPath);
capConfig.version = version;
capConfig.ios = capConfig.ios || {};
capConfig.ios.buildNumber = buildNumber;
capConfig.android = capConfig.android || {};
capConfig.android.versionCode = parseInt(buildNumber);
fs.writeFileSync(capConfigPath, JSON.stringify(capConfig, null, 2));

// Update package.json
const pkgPath = path.join(__dirname, "..", "package.json");
const pkg = require(pkgPath);
pkg.version = version;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`✅ Updated to Version ${version} (Build ${buildNumber})`);
