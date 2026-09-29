console.log("video32")

const sum = (a, b, c) => {
    console.log("run before return");
    if (typeof a !== 'number')
    {
        return; // void return undefined
    }
    return a + b + c;
    console.log("run after return");
};
console.log(sum("khôi", 3, 4));