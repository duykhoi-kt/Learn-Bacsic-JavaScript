console.log("video 63");

// fetch trả raw data (kiểu response) chuyển đổi sang object bằng cách sử dụng phương thức json() của response object
const temp = fetch("http://localhost:8000/users")
console.log(temp) // trả về promise object

temp.then(res => res.json())
    .then(data => console.log(data))
