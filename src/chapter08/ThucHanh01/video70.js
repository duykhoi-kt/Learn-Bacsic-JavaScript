
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todo');
// random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (todoForm && todoInput) {
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        todoInput.value = todoInput.value.trim();
        if (todoInput.value === "") {
            alert("Nội dung todo không được để trống");
            return;
        }
        // lưu todo vào localStorage theo định dạng object{id,name}

        // 1. tạo object todo
        const todo = {
            id: getRandomInt(0, 999),
            name: todoInput.value
        }
        //2. lưu todo vào localStorage
        // 2.1 lấy danh sách todo từ localStorage
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        // 2.2 thêm todo mới vào danh sách todos
        todos.push(todo);
        // 2.3 lưu danh sách todo vào localStorage
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        // chuyển hướng sang trang video70.html
        window.location.href = "./video70.html";
    })
}

const genrateTodoTable = () => {
    const todoListStr = localStorage.getItem("todos");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        console.log(todoList);
        const tbody = document.querySelector("#todoList");
        console.log(tbody);
        if (todoList && todoList.length > 0) {
            todoList.forEach((todo) => {
                tbody.innerHTML += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td><button data-id="${todo.id}" class = "btn-delete">Xóa</button></td>
                </tr>
            `;
            })
        }
    }
}
genrateTodoTable();

const deleBtns = document.querySelectorAll(".btn-delete");
if (deleBtns && deleBtns.length > 0) {
    deleBtns.forEach((Btn) => {
        Btn.addEventListener("click", (event) => {
            // hàm target này là nút xóa mà người dùng click vào, lấy ra id của todo cần xóa
            const id = event.target.dataset.id;
            const todoListStr = localStorage.getItem("todos");
            if (todoListStr) {
                const todoList = JSON.parse(todoListStr);
                // lọc ra các todo có id khác với id của todo cần xóa 
                // ví dụ: nếu id của todo cần xóa là 1, thì lọc ra các todo có id khác 1
                const newTodoList = todoList.filter((todo) => todo.id !== parseInt(id));
                localStorage.setItem("todos", JSON.stringify(newTodoList));
                window.location.reload();
            }
        })
    })
}

