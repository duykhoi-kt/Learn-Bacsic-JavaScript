console.log("video 65");

// callback là một hàm được vào như một đối số cho một hàm khác và được gọi lại sau khi hàm đó hoàn thành công việc của nó
const greeting = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
}
const hello = () => {
    console.log("Say hello....")
}
const hi = () => {
    console.log("Say hi....")
}
greeting("Eric", hello)
greeting("Eric", hi)