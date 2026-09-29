console.log("Hello World");
const user = {
    name: "Khôi",
    age: 21,
    job: "Developer"
};


// chuyển đổi từ object sang json
// console.log(user);
// const json = JSON.stringify(user);
// console.log(json);

/*

    // chuyển đổi từ json sang object
    const json = `{"name": "Khôi", "age": 21, "job": "Developer"}`;
    const user = JSON.parse(json);
    console.log(user);
    console.log(user.name);
*/

localStorage.setItem("user", JSON.stringify(user));

const userJson = JSON.parse(localStorage.getItem("user"));
console.log(userJson);
console.log(userJson.name);