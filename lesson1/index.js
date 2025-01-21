// readline - a built-in module that helps you to interact with users
// through terminal. It helps to read input from the user and write
// output back to the console
const readline = require("readline");

// I create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,  // to read user input
    output: process.stdout  // write output to console
})

// rl.question() is used to ask a question from the user
// and to read user's answer (answer)
rl.question("What's your name? ", (answer) => {
    console.log(`Nice to meet you, ${answer}`)
    rl.close()  // to close interface
})

// when close event is triggered, it prints "Bye"
rl.on("close", () => {
    console.log("Bye");
    process.exit(0)  // terminates Nodejs process
})