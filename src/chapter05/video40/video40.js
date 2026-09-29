console.log("video 40")

//map() là phương thức biến đổi mảng, nó sẽ tạo ra một mảng mới mà mỗi phần tử là kết quả biến đổi của phẩn tử tương ứng trong mảng cũ
const array1 = [1, 4, 9, 16];

// truyền một hàm callback vào map() để biến đổi từng phần tử trong mảng cũ

const map1 = array1.map(x => x * 2);

console.log(map1); // [2, 8, 18, 32]


const scores = [10,8,3,7,5]

scores[0] = 100
console.log(scores) // [100,8,3,7,5]

// read data
scores.forEach((value, index)=>{
    console.log("value:", value, "index:", index)
})
console.log("Map:")
// modify data
const doubledScores = scores.map((value, index)=>{
    console.log("value:", value, "index:", index)
    return value * 2
});
console.log(doubledScores);
console.log(scores) // [10,8,3,7,5] - mảng cũ không bị thay đổi