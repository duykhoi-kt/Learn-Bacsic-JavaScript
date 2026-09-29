console.log("video29");

// vòng lặp for
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// vòng lặp while

let score = 10;
while (score > 5) {
    console.log("Điểm của bạn là: " + score);
    score--;
}

// vòng lặp do-while
let score1 = 10
console.log("Vòng lặp do-while");
do {
    console.log("Điểm của bạn là: " + score1);
    score1--;
} while (score1 > 5);