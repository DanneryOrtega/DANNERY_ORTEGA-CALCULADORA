//variable valora+valorb=operacion
var operandoa;
var operandob;
var operacion;

function init() {
    //declaco variables

    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var decimal = document.getElementById('decimal');
    var parentesis_de_abrir = document.getElementById('parentesis_de_abrir');
    var parentesis_de_cierre = document.getElementById('parentesis_de_cierre');
    var porcentaje = document.getElementById('porcentaje');
    var inv = document.getElementById('inv');
    var sin = document.getElementById('sin');
    var ln = document.getElementById('ln');
    var pi = document.getElementById('pi');
    var cos = document.getElementById('cos');
    var log = document.getElementById('log');
    var e = document.getElementById('e');
    var tan = document.getElementById('tan');
    var raiz = document.getElementById('raiz');
    var ans = document.getElementById('ans');
    var exp = document.getElementById('exp');
    var xy = document.getElementById('xy');
    var rad = document.getElementById('rad');
    var deg = document.getElementById('deg');
    var x = document.getElementById('x!');
    var igual = document.getElementById('igual');
    //Eventos de click
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    decimal.onclick = function(e) {
        resultado.textContent = resultado.textContent + ".";
    }
    parentesis_de_abrir.onclick = function(e) {
        resultado.textContent = resultado.textContent + "(";
    }
    parentesis_de_cierre.onclick = function(e) {
        resultado.textContent = resultado.textContent + ")";
    }
    porcentaje.onclick = function(e) {
        resultado.textContent = resultado.textContent + "%";
    }
    inv.onclick = function(e) {
        resultado.textContent = resultado.textContent + "Inv";
    }

    ln.onclick = function(e) {
        resultado.textContent = resultado.textContent + "ln";
    }

    e.onclick = function(e) {
        resultado.textContent = resultado.textContent + "e";
    }
    tan.onclick = function(e) {
        resultado.textContent = resultado.textContent + "tan";
    }
    raiz.onclick = function(e) {
        resultado.textContent = resultado.textContent + "√(";
    }
    ans.onclick = function(e) {
        resultado.textContent = resultado.textContent + "Ans";
    }
    exp.onclick = function(e) {
        resultado.textContent = resultado.textContent + "EXP";
    }

    rad.onclick = function(e) {
        resultado.textContent = resultado.textContent + "Rad";
    }
    deg.onclick = function(e) {
        resultado.textContent = resultado.textContent + "Deg";
    }
    x.onclick = function(e) {
            resultado.textContent = resultado.textContent + "x!";
        }
        //escribir los numeros en la pantalla.....

    reset.onclick = function(e) {
        resetear();
    }

    xy.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "^";
        limpiar();
    }

    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "×";
        limpiar();
    }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    raiz.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "√(";
        limpiar();
    }

    cos.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "cos";
        limpiar();
    }

    sin.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "sin";
        limpiar();
    }

    log.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "log";
        limpiar();
    }

    porcentaje.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "%";
        limpiar();
    }

    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "×":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "^":
            res = Math.pow(operandoa, operandob);
            break;
        case "√(":
            res = Math.sqrt(operandoa);
            break;
        case "cos":
            res = Math.cos(operandoa * Math.PI / 180);
            break;
        case "sin":
            res = Math.sin(operandoa * Math.PI / 180);
            break;
        case "log":
            res = Math.log(operandoa);
            break;
        case "%":
            //res = parseFloat(operandoa) % parseFloat(operandob);
            res = parseFloat(operandoa) / 100;
            break;
    }
    resetear();
    resultado.textContent = res;
}