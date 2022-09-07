//Static type-checking -->before running the code
const message = 'Hello!';
message();
//non-Exception Failues
//
const user = {
    name: "Javier",
    nickname: "vader",
};
console.log(user.job);
//
function flipCoin() {
    return Math.random < 0.5;
}
//
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ...
}
else if (value === "b") {
    // Oops, unreachable
}
