// document.getElementById('firstClass-increase').addEventListener("click", function() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassPrice = firstClassNewCount * 150;
//     document.getElementById('firstClass-price').innerText = "First Class $" + firstClassPrice;
// })
// document.getElementById('firstClass-decrease').addEventListener("click", function() {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassPrice = firstClassNewCount * 150;
//     document.getElementById('firstClass-price').innerText = "First Class $" + firstClassPrice;
// })

function firstClass(isIncrease) {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);

    let firstClassNewCount = firstClassCount;
    if(isIncrease == true ) {
        firstClassNewCount = firstClassCount + 1;
    }
    if(isIncrease == false && firstClassNewCount > 0) {
        firstClassNewCount = firstClassCount - 1;
    }
    firstClassInput.value = firstClassNewCount;
    const firstClassPrice = firstClassNewCount * 150;
    document.getElementById('firstClass-price').innerText = "First Class $" + firstClassPrice;
    calculation();
}
            // Economy-part

function economyClass(isIncrease) {
    const economyInput = document.getElementById('economyClass-count');
    const economyClassCount = parseInt(economyInput.value);

    let economyClassNewCount = economyClassCount;
    if(isIncrease == true ) {
        economyClassNewCount = economyClassCount + 1;
    }
    if(isIncrease == false && economyClassNewCount > 0) {
        economyClassNewCount = economyClassCount - 1;
    }
    economyInput.value = economyClassNewCount;
    const economyClassPrice = economyClassNewCount * 100;
    document.getElementById('economyClass-price').innerText = "Economy $" + economyClassPrice;
    calculation();
}

function calculation() {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economyClass-count');
    const economyClassCount = parseInt(economyInput.value);

    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('total-price').innerText = "$" + totalPrice
    vat = Math.round(totalPrice * 0.1);
    document.getElementById('total-vat').innerText = "$" + vat;

    grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = "$" + grandTotal;
}