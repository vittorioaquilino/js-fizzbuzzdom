// stampare nella console i numeri
for (let i = 1; i <=100; i++){

    // definire se è multiplo di 3, di 5 o entrambi
    let multiple;

    if (i % 15 === 0) {
        multiple = "fizzbuzz";
    } else if (i % 3 === 0) {
        multiple = "fizz";
    } else if (i % 5 === 0) {
        multiple = "buzz";
    } else {
        multiple = i;
    }

    console.log(multiple);
    
    // stampare nell' html
    const rowResult = document.querySelector('.row');

    rowResult.innerHTML += `<div class="box ${multiple}">${multiple}</div> ` 
}



