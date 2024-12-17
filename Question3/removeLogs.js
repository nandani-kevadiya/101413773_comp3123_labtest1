const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Remove Log Files
if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach((file) => {
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });
    fs.rmdirSync(logsDir);
    console.log("Logs directory removed successfully.");
} else {
    console.log("Logs directory does not exist.");
}
