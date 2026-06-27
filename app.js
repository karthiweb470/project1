
function generateTable(){

let num = Number(document.getElementById("number").value);
let result = document.getElementById("result");

result.innerHTML = "";

for(let i = 1; i <= 23; i++){

    result.innerHTML += num + " / " + i + " = " + (num / i) + "<br>";

}

}
