
var ymin = document.getElementById("minimo");
var yopt = document.getElementById("optimo");
var tiem = document.getElementById("tiempo");
var rops = document.getElementById("rop");
var zona1 = document.getElementById("zona1");
var zona2 = document.getElementById("zona2");
var zona3 = document.getElementById("zona3");
var posicion = document.getElementById("posicion");
var b = document.getElementById("resultado");
b.addEventListener("click", mostrarDatos);



function mostrarDatos() {
    ymin.innerHTML = "y min = "+minimo();
    yopt.innerHTML = "y opt = "+optimo();
    tiem.innerHTML = "tiempo = "+tiempo();
    rops.innerHTML = " rop = "+rop()+")";
    zona1.innerHTML = " zona I = ( 0 ; "+minimo();
    zona2.innerHTML = " zona II = ("+minimo()+" ; "+ctu()+")";
    zona3.innerHTML = " zona III = ("+ctu()+" ; infinito)";
    posicion.innerHTML = " q se encuentra en "+qzona();
}
function minimo (){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var min = Math.sqrt((2*k*demanda)/h);
    min = min.toFixed(2);
    return min
}

function optimo (){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var c1 = parseFloat(document.getElementById("c1").value);
    var min = minimo();
    var opt = ((demanda*c1)+((k*demanda)/min)+((h*min)/2));
    console.log(min);
    console.log(opt);
    opt = opt.toFixed(2); 
    return opt
}
function tiempo (){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var opt = optimo();
    var time = (opt/demanda);
    time = time.toFixed(2);
    return time
}
function rop(){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var l = parseFloat(document.getElementById("l").value);
    var time = tiempo();
    var n = 0;
    var rp = 0;
    if (l < time){
        rp = l*demanda;
    }else{
        n = Math.floor(l/t);
        rp = l-(n*demanda);
    }
    console.log(n, rp, "gaaa");
    rp = rp.toFixed(2);
    return rp
}
function ctu(){
    
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var yopt = optimo();
    var qopt = 0;
    var a = 1;
    console.log("prugbea", yopt);
    console.log(c);
    var b = ((2*((c2*demanda)-yopt))/h);
    console.log(b);
    var c = ((2*k*demanda)/h);
    
    var q1 = ((-b+(Math.sqrt((b*b)-(4*a*c))))/2*a);
    var q2 = ((-b-(Math.sqrt((b*b)-(4*a*c))))/2*a);
    console.log("golasdf");
    console.log(q1,"asda");
    if (q1 > q2){
        qopt = q1;
    }else{
        qopt = q2;
    }
    console.log(qopt, " afgsdg");
    qopt = qopt.toFixed(2);
    return qopt
}
function qzona() {
    console.log( "zonaaas");
    var q = parseFloat(document.getElementById("q").value);
    console.log(q, "aa");
    var min = minimo();
    console.log(min, "msid");
    var opt =  ctu();
    console.log(opt, "aga");
    var posicion = "";
    console.log(posicion, "zonaaas");
    if (q > 0 && q < min){
        posicion = "zona I";
    }
    if (q > min && q < opt){
        posicion = "zona II";
    }
    if (q > opt ){
        posicion = "zona III";
    }
    console.log(posicion, "zonaaas");
    return posicion
}