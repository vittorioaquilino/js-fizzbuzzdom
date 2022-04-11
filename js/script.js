// stampare nella console i numeri
for (let i = 0; i <=100; i++){

    // definire se è multiplo di 3, di 5 o entrambi
    let multiple;

    if (i % 15 === 0) {
        multiple = "FizzBuzz";
    } else if (i % 3 === 0) {
        multiple = "Fizz";
    } else if (i % 5 === 0) {
        multiple = "Buzz";
    } 

    // stampare
    console.log(i, multiple);
}

// stampo i numeri nella pagina
const rowWrapper = document.querySelector('.row');

for (let i = 0; i <= 100; i++) {
    rowWrapper.innerHTML += `<div class="box">${i}</div> ` 
}