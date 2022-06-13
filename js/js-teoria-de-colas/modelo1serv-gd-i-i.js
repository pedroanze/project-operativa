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
    pn.innerHTML="p0= "+p_n();
    ls.innerHTML="Ls= "+l_s();
    ws.innerHTML="Ws= "+w_s();
    wq.innerHTML="Wq= "+w_q();
    lq.innerHTML="Ls= "+l_q();
    c.innerHTML="p= "+c_guion();
}

function pchica() {
    var lambda=parseFloat(document.getElementById("lambda").value);
    var niu=parseFloat(document.getElementById("niu").value);
    var p=(lambda/niu);
    p=p.toFixed(2);
    return p
}

function p_0(){
    var p0=1-pchica();
    p0=p0.toFixed(2);
    return p0
}

function p_n(){
    var n=parseFloat(document.getElementById("n").value);
    var pn=p_0()*Math.pow(pchica(),n);
    pn=pn.toFixed(2);
    return pn
}

function l_s(){
    var ls=pchica()/p_0();
    ls=ls.toFixed(2);
    return ls
}

function w_s(){
    var lambda=parseFloat(document.getElementById("lambda").value);
    var niu=parseFloat(document.getElementById("niu").value);
    var ws=1/(lambda-niu);
    ws=ws.toFixed(2);
    return ws
}

function w_q(){
    var niu=parseFloat(document.getElementById("niu").value);
    var wq=pchica()/(niu*p_0());
    wq=wq.toFixed(2);
    return wq
}

function l_q(){
    var lq=Math.pow(pchica(),2)/p_0();
    lq=lq.toFixed(2);
    return lq
}

function c_guion(){
    var c=l_s()-l_q();
    c=c.toFixed(2);
    return c
}