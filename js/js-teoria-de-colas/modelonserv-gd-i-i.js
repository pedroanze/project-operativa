var p=document.getElementById("p");
var p0=document.getElementById("p0");
var pn=document.getElementById("pn");
var ls=document.getElementById("ls");
var ws=document.getElementById("ws");
var wq=document.getElementById("wq");
var lq=document.getElementById("lq");
var c = document.getElementById("c");
var b = document.getElementById("resultado");
b.addEventListener("click", mostrarDatos);

function mostrarDatos() {
    p.innerHTML="p= "+pchica();
    p0.innerHTML="p0= "+p_0();
    pn.innerHTML="pn= "+p_n();
    lq.innerHTML="Lq= "+l_q();
    ls.innerHTML="Ls= "+l_s();
    ws.innerHTML="Ws= "+w_s();
    wq.innerHTML="Wq= "+w_q();
}

function pchica() {
    var lambda=parseFloat(document.getElementById("lambda").value);
    var niu=parseFloat(document.getElementById("niu").value);
    var p=(lambda/niu);
    p=p.toFixed(3);
    return p
}

function p_0(){
    var suma=0;
    var n=0;
    var c=parseFloat(document.getElementById("c").value);

    while (n<=c-1) {
        var calc=(Math.pow(pchica(),n)/factorial(n));
        suma=suma+calc;
        n++;
    }
    suma=suma+((Math.pow(pchica(),c)/factorial(c))*(1/(1-(pchica()/c))));
    suma=Math.pow(suma,-1);
    suma=suma.toFixed(3);
    return suma
}

function p_n(){
    var n=parseFloat(document.getElementById("n").value);
    var c=parseFloat(document.getElementById("c").value);
    if (n<c){
        var pn=(Math.pow(pchica(),n)/factorial(n))*p_0();
        pn=pn.toFixed(3);
        return pn
    }else if(n>=c){
        var pn=(Math.pow(pchica(),n)/(factorial(c)*Math.pow(c,n-c)))*p_0();
        pn=pn.toFixed(3);
        return pn
    }
}

function l_s(){
    var ls=parseFloat( l_q())+parseFloat(pchica());
    ls=ls.toFixed(3);
    return ls
}

function l_q(){
    var c=parseFloat(document.getElementById("c").value);
    var lq=((Math.pow(pchica(),c+1))/(factorial(c-1)*Math.pow(c-pchica(),2)))*p_0();
    lq=lq.toFixed(3);
    return lq
}


function w_q(){
    var lambda=parseFloat(document.getElementById("lambda").value);
    wq=l_q()/lambda;
    wq=wq.toFixed(3);
    return wq
}

function w_s(){
    var lambda=parseFloat(document.getElementById("lambda").value);
    ws=l_s()/lambda;
    ws=ws.toFixed(3);
    return ws
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}