console.log("video 38")

const names = ["hoidanit", "eric","bla bla", "nam"];

// index  = 0; arr[index]

console.log(names[0]) // hoidanit

names[2] = "hoidanit 2.0"

console.log(names) // hoidanit 2.0
// thêm phần tử mới cuối vào mảng

names.push("hoidanit 3.0")

console.log(names) // hoidanit 3.0

// thêm phần tử mới đầu vào mảng

names.unshift("hoidanit 4.0")
console.log(names) // hoidanit 4.0

// xóa phần tử cuối cùng trong mảng

names.pop()
console.log(names) // hoidanit 4.0

// xóa phần tử đầu tiên trong mảng

names.shift()
console.log(names) // hoidanit 4.0