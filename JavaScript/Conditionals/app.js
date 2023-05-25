console.log("Its working!");

let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);

if (rand < 5) {
    console.log("Lower than 5!");
}
else if (rand > 5) {
    console.log("Higher than 5!")
}
else {
    console.log("Exactly 5!")
}

function isEven(num) {
    if (num % 2 === 0){
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

isEven(rand); //function test