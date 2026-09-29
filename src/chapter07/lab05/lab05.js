console.log("lab05")

// Thực hiện gọi API với fetch (lấy danh sách users)
// sử dụng async/await để xử lý bất đồng bộ

const fetchUsers = async () => {
    const res = await fetch(" http://localhost:8000/users")
    const data = await res.json()
    const tbody = document.querySelector("#users");
    if (data && data.length > 0) {
        data.forEach((user) => {
            tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
        })
    }
}
fetchUsers();

//  Sử dụng javascript render table
//Render động dữ liệu của table html dựa vào javascript và data của api

// bước 1: tạo ra các thẻ tr, td dựa vào data của api
