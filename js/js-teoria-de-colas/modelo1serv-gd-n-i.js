var p=document.getElementById("p");
var p0=document.getElementById("p0");
var pn=document.getElementById("pn");
var lambdaefec=document.getElementById("lamefec");
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
    lambdaefec.innerHTML="lamda efec= "+lambda_efec();
    ls.innerHTML="Ls= "+l_s();
    ws.innerHTML="Ws= "+w_s();
    wq.innerHTML="Wq= "+w_q();
    lq.innerHTML="Lq= "+l_q();
    c.innerHTML="c= "+c_guion();
}

function pchica() {
    var lambda=parseFloat(document.getElementById("lambda").value);
    var niu=parseFloat(document.getElementById("niu").value);
    var p=(lambda/niu);
    p=p.toFixed(5);
    return p
}

function p_0(){
    var n=parseFloat(document.getElementById("nmayus").value);
    var p0=(1-pchica())/(1-Math.pow(pchica(),n+1));
    p0=p0.toFixed(5);
    return p0
}

function p_n(){
    var n=parseFloat(document.getElementById("n").value);
    var nmayus=parseFloat(document.getElementById("nmayus").value);
    var pn=((1-pchica())*Math.pow(pchica(),n))/(1-Math.pow(pchica(),nmayus+1));
    pn=pn.toFixed(5);
    return pn
}

function lambda_efec(){
    var lambda=parseFloat(document.getElementById("lambda").value);
    var n=parseFloat(document.getElementById("nmayus").value);
    var pn=((1-pchica())*Math.pow(pchica(),n))/(1-Math.pow(pchica(),n+1));
    var lambdaefec=lambda*(1-pn);
    lambdaefec=lambdaefec.toFixed(5);
    return lambdaefec
}

function l_s(){
    var n=parseFloat(document.getElementById("nmayus").value);
    if(pchica==1){
        var ls=n/2;
        ls=ls.toFixed(5);
        return ls
    }else{
        var ls=(pchica()*(1-((n+1)*Math.pow(pchica(),n))+(n*Math.pow(pchica(),n+1))))/((1-pchica())*(1-Math.pow(pchica(),n+1)));
        ls=ls.toFixed(5);
        return ls
    }
}

function w_s(){
    var ws=l_s()/lambda_efec();
    ws=ws.toFixed(5);
    return ws
}

function w_q(){
    var niu=parseFloat(document.getElementById("niu").value);
    wq=w_s()-(1/niu);
    wq=wq.toFixed(5);
    return wq
}

function l_q(){
    var niu=parseFloat(document.getElementById("niu").value);
    lq=-((lambda_efec()-(l_s()*niu))/niu);
    lq=lq.toFixed(5);
    return lq
}

function c_guion(){
    c=l_s()-l_q();
    c=c.toFixed(5);
    return c
}