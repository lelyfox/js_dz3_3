let num = +prompt('Введите число');
let deg = +prompt('Введите степень числа');
let reply = 1;


for (let i = 1; i <= deg; i++) {
    reply = reply * num
}

console.log(reply);
