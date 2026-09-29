console.log("lab04")

const formElement = document.querySelector(".form");
console.log(formElement);

const usernameElement = document.getElementById("name");
console.log(usernameElement);

const passwordElement = document.getElementById("password");
console.log(passwordElement);

formElement.addEventListener("submit",(event)=>{
    // hàm peventDefault() sẽ ngăn chặn hành vi mặc định của form khi submit
    event.preventDefault();
    if 
    (
        usernameElement.value === "hoidanit@gmail.com" &&
        passwordElement.value === "123456"
    ) 
    {
        alert("Đăng nhập thành công");
        window.location.href = "success.html";
    }
    else
    {
        alert("Tài khoản hoặc mật khẩu không đúng");
        usernameElement.style.border = "1px solid red";
        passwordElement.style.border = "1px solid red";
    }
})
