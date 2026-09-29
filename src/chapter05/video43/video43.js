console.log("video 43")

const person ={
    name:  "Hải Đăng",
    age: 18

}
// get data
console.log("person:", person)
console.log("person.name:", person.name)
console.log("person.age:", person.age)

// set data
person.address = "Hà Nội"
person["language"] = "Tiếng Việt"
console.log("person:", person)

delete person.age
console.log("person:", person)