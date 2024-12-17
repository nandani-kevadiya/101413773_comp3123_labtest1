const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Create Log Files
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created successfully.");
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`File created: ${fileName}`);
}
