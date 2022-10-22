let C = document.querySelector("#C");
let K = document.querySelector("#K");
let F = document.querySelector("#F");
let R = document.querySelector("#R");

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("input", function (x){
        let value = parseFloat(x.target.value);

        switch(x.target.name){
            case "C":
                F.value = value * 1.8 + 32;
                K.value = value + 273.15;
                R.value = (value + 273.15) * 1.8;
            break;
            case "F":
                C.value = (value - 32) / 1.8;
                K.value = value - 32 * 1.8 + 273;
                R.value = value + 459.67;
                break;
            case "K":
                C.value = value - 273.15;
                F.value = ((value - 273.15) * 1.8) + 32;
                R.value = value * 1.8
            break;
            case "R":
                C.value = (value / 1.8) - 273.15;
                F.value = value - 459.67;
                K.value = value / 1.8;
            break;
        }
       
    });

});