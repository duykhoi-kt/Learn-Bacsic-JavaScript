console.log("video 44")

const sv1 = {
    username: "Hoidanit",
    scores: 9.6,
}
const sv2 = {
    username: "eric",
    scores: 3
}
const sv3 = {
    username: "bla bla",
    scores: 5
}
const sinhvien = [sv1, sv2, sv3]

// console.log(">>> check sinhvien:", sinhvien)

// sinhvien.forEach((item, index) => {
//     console.log("item:", item, "name:", item.username)
// })

const person = {
    email: "khoikontum05@gmail.com",
    age: 25,
    address: "vietnam"
}
// for...in
// for (key in person) {
//     console.log("key: ", key, ",", "value:", person[key])
//     /* kết quả:
//         key:  email , value: khoikontum05@gmail.com
//         key:  age , value: 25
//         key:  address , value: vietnam
//     */
// }

// for...of
// for (let value of Object.values(person))
// {
//     console.log("value:", value)
//     /* kết quả:
//         value: khoikontum05@gmail.com
//         value: 25
//         value: vietnam
//     */

// }
// entries là một mảng gồm các mảng con, mỗi mảng con có 2 phần tử: key và value
// for (let [key, value] of Object.entries(person))
// {
//     console.log("key:", key, "value:", value)
//     /*kết quả: 
//         key: email , value: khoikontum05@gmail.com
//         key: age , value: 25
//         key: address , value: vietnam
//     */
// }