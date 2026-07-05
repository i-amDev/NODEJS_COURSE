const fs = require("fs");

console.log("First JS File.");

fs.writeFile("output.txt", "SOME TEXT", (err) => {
    if (err) console.log("Error creating output.txt");
    else console.log("Successfully created output.txt");
});