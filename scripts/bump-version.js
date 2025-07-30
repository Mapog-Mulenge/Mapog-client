const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'capacitor.config.json');
const config = require(configPath);

// Increment build numbers
config.ios.buildNumber = String(parseInt(config.ios.buildNumber) + 1);
config.android.versionCode = config.android.versionCode + 1;

// Save back to file
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

console.log(`✅ Version bump complete. iOS Build: ${config.ios.buildNumber}, Android Build: ${config.android.versionCode}`);
