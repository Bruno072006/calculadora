function add9() {
    let input = document.getElementById("myInp");
    input.value += "9"
}

function add8() {
    let input = document.getElementById("myInp");
    input.value += "8"
}

function add7() {
    let input = document.getElementById("myInp");
    input.value += "7"
}

function add6() {
    let input = document.getElementById("myInp");
    input.value += "6"
}

function add5() {
    let input = document.getElementById("myInp");
    input.value += "5"
}

function add4() {
    let input = document.getElementById("myInp");
    input.value += "4"
}

function add3() {
    let input = document.getElementById("myInp");
    input.value += "3"
}

function add2() {
    let input = document.getElementById("myInp");
    input.value += "2"
}

function add1() {
    let input = document.getElementById("myInp");
    input.value += "1"
}

function add0() {
    let input = document.getElementById("myInp");
    input.value += "0"
}

function del() {
    let input = document.getElementById("myInp");
    input.value = input.value.slice(0, -1);
}

function reset() {
    let input = document.getElementById("myInp");
    input.value = input.value.slice(0, -0);
}



function add() {
    let input = document.getElementById("myInp");
    input.value += "+";
}

function sub() {
    let input = document.getElementById("myInp");
    input.value += "-";
}

function div() {
    let input = document.getElementById("myInp");
    input.value += "/";
}

function mult() {
    let input = document.getElementById("myInp");
    input.value += "*";
}


function result() {
    let input = document.getElementById("myInp");
    let expressao = input.value;

    try {
        let resultado = eval(expressao)
        input.value = + resultado;
    }

    catch (error) {
        document.getElementById("myInp").input.value = 'Erro: Expressão inválida';
        input.value = ""; // Limpa o input em caso de erro
    }
}

