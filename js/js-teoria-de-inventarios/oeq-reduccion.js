
var ymin = document.getElementById("minimo");
var yopt = document.getElementById("optimo");
var tiem = document.getElementById("tiempo");
var rops = document.getElementById("rop");
var zona = document.getElementById("zona");

var posicion = document.getElementById("posicion");
var b = document.getElementById("resultado");
b.addEventListener("click", mostrarDatos);



function mostrarDatos() {
    ymin.innerHTML = "y min = "+minimo();
    yopt.innerHTML = "y opt = "+optimo();
   tiem.innerHTML = "tiempo = "+tiempo();
    rops.innerHTML = " rop = "+rop();
    zona.innerHTML = " ( 0 ; "+minimo()+") - ("+minimo()+" ; "+ctu()+") - ("+ctu()+" ; infinito)";
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
    var q=parseFloat(document.getElementById("q").value);
    if(0<=q & q<minimo()){
        return minimo()
    }else if (minimo()<q & q<ctu()){
        return q
    }else if(ctu()<q){
        return minimo()
    }
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
        n = Math.floor(l/time);
        var le = l-(n*time);
        rp=le*demanda
    }
    rp = rp.toFixed(2);
    return rp
}
function ctu(){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var c2=parseFloat(document.getElementById("c2").value);
    var a=1;
    var b=-1*((2*((c2*demanda)-tcu1())/(h)));
    var c=(2*k*demanda)/h;

    
    var q1 =-1*((-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a);
    var q2 =-1*((-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a);

    q1=q1.toFixed(3);
    q2=q2.toFixed(3);
    console.log(q1);
    console.log(q2);
    if (q1 < q2){
        return q1
    }else{
        return q2
    }

}

function tcu1(){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var c1=parseFloat(document.getElementById("c1").value);
    var tcu1=(demanda*c1)+((k*demanda)/minimo())+((h/2)*minimo());
    return tcu1
}

function qzona() {
   
    var q = parseFloat(document.getElementById("q").value);
    
    var min = minimo();
    
    var opt =  ctu();
    
    var posicion = "";

    if (q > 0 && q < min){
        posicion = "zona I";
    }
    if (q > min && q < opt){
        posicion = "zona II";
    }
    if (q > opt ){
        posicion = "zona III";
    }
    
    return posicion
}