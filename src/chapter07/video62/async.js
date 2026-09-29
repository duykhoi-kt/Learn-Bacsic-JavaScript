console.log("1.Bắt đầu")

// tạo một Promise để giả lập một tác vụ mất thời gian (ví dụ: tải dữ liệu từ server)
const myPromise = new Promise((resolve, reject) => {
    console.log("2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)");
    // setTimeout là một hàm bất đồng bộ, nó sẽ không "dừng" chương trình mà sẽ chạy sau khoảng thời gian nhất định
    setTimeout(() => {
        resolve("4.Tác vụ hoàn thành! sau 2 giây");// dòng này sẽ thực thi sau cùng
    }, 2000); // chờ 2 giây trước khi gọi resolve
});


//.then() đăng ký một hành động sẽ làm khi Promise được giải quyết (resolve)
myPromise.then((message) => {
    console.log(message); // in ra thông điệp khi Promise hoàn thành
});

console.log("3. kết thúc kịch bản chính (sẽ in ra trước khi Promise hoàn thành)");

/*  OUTPUT
1.Bắt đầu
2.tsac vụ trong Promise bắt đầu (chạy ngay lập tức)
3. kết thúc kịch bản chính (sẽ in ra trước khi Promise hoàn thành)
....chờ 2 giây....
4.Tác vụ hoàn thành! sau 2 giây

*/