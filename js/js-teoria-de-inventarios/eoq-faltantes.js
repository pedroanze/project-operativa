var s = document.getElementById("s");
var q = document.getElementById("q");
var t = document.getElementById("t");
var qs = document.getElementById("qs");
var b = document.getElementById("resultado");
b.addEventListener("click", mostrarDatos);


function mostrarDatos() {
    s.innerHTML = "S* = "+s_optimo();
    q.innerHTML="Q*= "+q_optimo();
    t.innerHTML = "t* = "+t_optimo();
    qs.innerHTML = " Q*-S* = ";
}

function s_optimo(){
    var d = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var p = parseFloat(document.getElementById("p").value);

    var s=(Math.sqrt(2*k*d/h))*(Math.sqrt(p/(p+h)));
    s=s.toFixed(3);
    return s
}

function q_optimo(){
    var d = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var p = parseFloat(document.getElementById("p").value);

    var s=(Math.sqrt(2*k*d/h))*(Math.sqrt((p+h)/p));
    s=s.toFixed(3);
    return s
}

function t_optimo(){
    var d = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var p = parseFloat(document.getElementById("p").value);

    var s=(Math.sqrt(2*k/h*d))*(Math.sqrt((p+h)/p))/d;
    s=s.toFixed(3);
    return s
}