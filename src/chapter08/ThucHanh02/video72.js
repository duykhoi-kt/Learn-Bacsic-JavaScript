// hàm lấy danh sách blog từ API và hiển thị lên bảng
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log(data);
    const tbody = document.querySelector("#blogs");
    if (data && data.length > 0) {
        data.forEach((blog) => {
            tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                <button data-id="${blog.id}" class="delete-blog">
                    Xóa
                </button>
                </td>
            </tr>
        `;
        });
    }
}
// hàm xử lý sự kiện thêm mới blog
const handleAddNewBlog = () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const content = document.querySelector("#content");
    const saveBlogBtn = document.querySelector("#saveBlog");

    saveBlogBtn.addEventListener("click", async () => {

        //gọi API để thêm mới blog
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });

        // data là dữ liệu phản hồi từ API sau khi thêm mới blog
        // đồng thời là dữ liệu của blog vừa được thêm mới
        // nó là object có các thuộc tính id, title, author, content
        const data = await rawResponse.json();
        console.log("phản hồi APi :", data);
        // thêm dòng mới vào cuối bảng
        addNewRowToEnd(data);
    })
}
// hàm thêm dòng mới vào cuối bảng
const addNewRowToEnd = (blog) => {
    const tablebody = document.querySelector("#blogs tbody");
    // tạo phần tử dòng mới
    const newRow = document.createElement("tr");
    // gán HTML cho dòng mới
    newRow.innerHTML =
        `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                <button data-id="${blog.id}" class="delete-blog">
                    Xóa
                </button>
                </td>
            </tr>
    `;
    // thêm dòng mới vào cuối bảng
    tablebody.appendChild(newRow);
    // gán sự kiện onclick cho row vừa tạo
    const btn = document.querySelector(`[data-id="${blog.id}"]`);
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        //gọi API để thêm mới blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await rawResponse.json();
        //delete html row
        const row = btn.closest("tr");
        row.remove();
    })
}
const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");
    console.log(btns);
    if (btns) {
        btns.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                //gọi API để thêm mới blog
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, 
                {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                const data = await rawResponse.json();
                //delete html row
                const row = btn.closest("tr");
                row.remove();
            })
        });
    }
}

fetchBlogs().then(() => {
    handleDeleteBtns();
});
handleAddNewBlog();
