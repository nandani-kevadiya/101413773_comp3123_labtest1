function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
            return;
        }

        const filteredWords = mixedArray
            .filter((item) => typeof item === "string")
            .map((word) => word.toLowerCase());

        if (filteredWords.length > 0) {
            resolve(filteredWords);
        } else {
            reject("No valid words found in the array");
        }
    });
}

// Test the function
const input = ["HELLO", 123, "WORLD", null, "TEST", true];
lowerCaseWords(input)
    .then((result) => console.log("Lowercase Words:", result))
    .catch((error) => console.error("Error:", error));
