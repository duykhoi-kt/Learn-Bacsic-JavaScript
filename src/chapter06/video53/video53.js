console.log("video53")

const myBtnElement = document.getElementById("myBtn");
console.log(myBtnElement);

const myTextElement = document.getElementById("myText");
console.log(myTextElement);

const backBtnElement = document.getElementById("backBtn");
console.log(backBtnElement);

myBtnElement.addEventListener("click",()=>{
    console.log("clicked")
    myTextElement.style.color = "red"
})

backBtnElement.addEventListener("click",()=>{
    console.log("clicked back")
    myTextElement.style.color = "black"
})