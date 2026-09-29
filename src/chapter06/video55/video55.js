console.log("video55")

const submitBtnElement = document.getElementById("submitBtn");
console.log(submitBtnElement);

const inputElement = document.getElementById("name");
const prevElement = document.getElementById("prev");
// hàm này lấy dữ liệu từ localStorage và hiển thị ra màn hình
const prevName = localStorage.getItem("name");
if (prevName) {
    prevElement.innerHTML = `<b>${prevName}</b>`;
}
submitBtnElement.addEventListener("click", () => {
    // console.log(inputElement.value);
    localStorage.setItem("name", inputElement.value);
    document.getElementById("message").innerHTML = `<b>${inputElement.value}</b>`
    
})

