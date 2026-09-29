console.log("video52")

const myBtnElement = document.getElementById("myBtn");
console.log(myBtnElement);

const myTextElement = document.getElementById("myText");
console.log(myTextElement);


myBtnElement.addEventListener("click",()=>{
    console.log("clicked")
    myTextElement.innerHTML = "<h1 style = 'color: red;'>video52 changed with hoiDanIt</h1>"
})