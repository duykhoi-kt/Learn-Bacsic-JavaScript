console.log("video33")

let globalVar = "Tôi là biến toàn cục";

function show()
{
    console.log(globalVar); // truy cập biến toàn cục
}

show();
console.log(globalVar); // truy cập biến toàn cục


function sayHi(){
    let name1 = "Khôi"; // biến cục bộ
    console.log(name1); // truy cập biến cục bộ

    if(true){
        let x = 10;
        const y =20;
        console.log(x); // truy cập biến cục bộ
        console.log(y); // truy cập biến cục bộ
    }
    console.log(x); // lỗi: x is not defined, không thể truy cập biến cục bộ bên ngoài block

}
sayHi();
console.log(name1); // lỗi: name is not defined, không thể truy cập biến cục bộ bên ngoài hàm