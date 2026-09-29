console.log("Bài Tập Lab 01");

let fullName= "Nguyễn Duy Khôi";

let birthYear = 2005;

let isStudent = false;
// tính tuổi hiện tại dựa trên birthYear

let current = new Date();

let age = current.getFullYear() - birthYear

if (age >= 18 && age <= 22)
{
    isStudent = true;
    console.log(`Họ và tên: ${fullName} \nTuổi: ${age} \nLà sinh viên: ${isStudent}`)
}
else
{
    isStudent = false;
    console.log(`Họ và tên: ${fullName} \n tuổi: ${age} \n là sinh viên: ${isStudent}`)
}
    