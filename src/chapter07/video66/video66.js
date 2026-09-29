console.log("video 66");

//promises
fetch("http://localhost:8000/users")
.then(res => res.json())
.then(data => console.log(data))

// //async await

const fetchData = async ()=>{
    const rest = await fetch("http://localhost:8000/users")
    console.log(rest)
    const data = await rest.json();
    console.log(data)
}
fetchData()