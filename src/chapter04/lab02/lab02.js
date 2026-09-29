console.log("lab02");

function tinhTrungBinh (toan, van, anh)
{
    return (toan + van + anh) / 3;
}

const xeploai = (diemTB) => {
    if (diemTB >= 9 || diemTB === 10) {
        return "Xuất sắc";
    } else if (diemTB >= 8 && diemTB < 9) {
        return "giỏi";
    } else if (diemTB >= 6.5 && diemTB < 8) {
        return "khá";
    }
    else return "trung bình";
};

const diemTrungBinh = tinhTrungBinh(9, 8, 7);
console.log(`Điểm trung bình: ${diemTrungBinh}`);
console.log(`Xếp loại: ${xeploai(diemTrungBinh)}`);