console.log("video 64");
const doSomething = () => {

    const a = 10, b = 0;

    if (b === 0) {
        throw new Error("b không được bằng 0");
    }
    return a / b;
}
try {
    doSomething();
} catch (error) {
    console.log("Đã xảy ra lỗi: ", error);
} finally {
    console.log("Chạy xong rồi nhé");
}
