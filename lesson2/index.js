// the node:fs module enables interacting with the files
const fs = require("fs")


// readFileSync waits for the file to be read before continuing
// readFile (async) keeps running other tasks while waiting for the file
try {
    const data = fs.readFileSync("./input.txt", "utf-8")
    console.log(data)
} catch (error) {
    console.error("Error reading file:", error)
}


// write to a file, even if there's no write.txt, it automatically creates it 
// and writes the message
const message1 = `This message created at ${new Date().toDateString()}`
fs.writeFileSync("./write.txt", message1)


// append a new text
const message2 = "Appended text"
fs.appendFileSync("./write.txt", `\n${message2}`)


// copy file
fs.copyFileSync("input.txt", "input2.txt")


// rename file name
fs.rename("input2.txt", "renamed.txt", (err) => {
    if (err) throw new Error(err)
    console.log("Renaming complete 🚀")
})