console.log("video29")

// break statement
console.log("Break statement example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}

console.log("Continue with the rest of the code after the loop");
// continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // skip the rest of the loop body when i is 5
    }
    console.log(i);
}