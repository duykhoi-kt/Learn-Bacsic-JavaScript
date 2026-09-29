console.log("video26");

// if/ if-else/ else if

let age = 12;
if(age >= 18) 
{
    console.log("Đủ tuổi uống rượu bia");
}
else
{
    console.log("Chưa đủ tuổi uống rượu bia");
}
//score => A, B, C, D, F . Giỏi Khá Trung Bình

const score = 6;
if(score > 9)
{
    console.log("Giỏi");
}
else
{
    if(score > 7)
    {
        console.log("Khá");
    }
    
    if (score > 5)
    {
        console.log("Trung Bình");
    }
}