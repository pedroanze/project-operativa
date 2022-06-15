var y = document.getElementById("optimo");
var tiem = document.getElementById("tiempo");
var rops = document.getElementById("rop");
var b = document.getElementById("resultado");
b.addEventListener("click", mostrarDatos);


function optimo (){
    var demanda = parseFloat(document.getElementById("demanda").value);
    var k = parseFloat(document.getElementById("k").value);
    var h = parseFloat(document.getElementById("h").value);
    var min = Math.sqrt((2*k*demanda)/h);
    min = min.toFixed(2);
    return min
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

    if (l > time){
   
        n = Math.floor(l/t);
        console.log(n, rp, "gaaa gaaa");
        rp = l-(n*demanda);
        console.log(n, rp, "gaaa gaaa");
    }else if (l < time)
    {
        rp = l*demanda;

        console.log(n, rp, "gaaa");
    }
    
    if (l < time){
        rp = l*demanda;
    }else{
        n = Math.floor(l/time);
        var le = l-(n*time);
        rp=le*demanda;
    }
    rp = rp.toFixed(2);
    return rp
}

function mostrarDatos() {
    y.innerHTML = "y = "+optimo();
    tiem.innerHTML="tiempo optimo= "+tiempo();
    rops.innerHTML = " rop = "+rop();
}