console.log("lab 03")

/*tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object có các thuộc tính:
-name (tên sản phẩm)
- price(giá sản phẩm)
- inStock (số lượng tồn kho)    
*/

const products = 
[
    {
        name: "Iphone 14",
        price: 30000000,
        inStock: true
    },
    {
        name : "Iphone 13",
        price: 20000000,
        inStock: false
    },
    {
        name: "Iphone 12",
        price: 15000000,
        inStock: true
    },
    {
        name: "Iphone 11",
        price: 10000000,
        inStock: false
    },
    {
        name: "Iphone 10",
        price: 5000000,
        inStock: true
    }

]

// in ra tên sản phẩm đầu tiên

console.log("Tên sản phẩm đầu tiên:", products[0].name)

// thay đổi giá trị sản phẩm thứ 2 thành 150 và in ra ra danh sách tất cả các sản phẩm
products[1].price = 150
products.forEach((item)=>{
    console.log("danh sách sản phẩm:", item)
})
// thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả các sản phẩm

products.push({
    name: "Iphone 16",
    price: 40000000,
    inStock: true
})

console.log("danh sách sản phẩm sau khi thêm sản phẩm mới:", products)
// xóa sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả các sản phẩm
products.pop()
console.log("danh sách sản phẩm sau khi xóa sản phẩm cuối cùng:", products)
// Dùng forEach() để in ra tất cả các tên sản phẩm
products.forEach((item)=>{
    console.log("Tên sản phẩm: ", item.name);
})
// xóa tất cả các sản phẩm có giá lớn hơn 20000000 và in ra danh sách tất cả các sản phẩm còn lại

const productsFiltered = products.filter((item)=>{
    return item.price <= 20000000;
})

console.log("danh sách sản phẩm còn lại:", productsFiltered);

// xóa tất cả các sản phẩm có inStock = false và in ra danh sách tất cả các sản phẩm còn lại
const productsInStock = products.filter((item)=>{
    return item.inStock === true;
})

console.log("danh sách sản phẩm còn lại:", productsInStock);
// xóa sản phẩm vị trí thứ 3 ra khỏi danh sách và in ra danh sách tất cả các sản phẩm còn lại
products.splice(2, 1);
console.log("danh sách sản phẩm sau khi xóa:", products);
// Dùng map() để tạo ra mảng mới chỉ chứa giá sản phẩm

const  productPrices = products.map((item)=>{
    return item.price;
})
console.log("mảng giá sản phẩm:", productPrices);
// dùng for ... in để duyệt qua thuộc tính của sản phẩm đầu tiên và in ra tất cả các thuộc tính và giá trị của nó

for(let key in products[1]){
    console.log("thuộc tính:",key, "value:", products[1][key]);
}