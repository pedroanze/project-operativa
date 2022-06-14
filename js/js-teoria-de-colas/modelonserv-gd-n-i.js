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
    lq.innerHTML="Lq= "+l_q();
    ls.innerHTML="Ls= "+l_s();
    ws.innerHTML="Ws= "+w_s();
    wq.innerHTML="Wq= "+w_q();
}

function pchica() {
    var lambda=parseFloat(document.getElementById("lambda").value);
    var niu=parseFloat(document.getElementById("niu").value);
    var p=(lambda/niu);
    p=p.toFixed(5);
    return p
}

function p_0(){
    var suma=0;
    var n=0;
    var c=parseFloat(document.getElementById("c").value);
    var nmayus=parseFloat(document.getElementById("nmayus").value);

    if((pchica()/c)!=1){
        while (n<=c-1) {
            var calc=(Math.pow(pchica(),n)/factorial(n));
            suma=suma+calc;
            n++;
        }
        suma=suma+(((Math.pow(pchica(),c))*(1-Math.pow(pchica()/c,nmayus-c+1)))/(factorial(c)*(1-(pchica()/c))));
        suma=Math.pow(suma,-1);
        suma=suma.toFixed(5);
        return suma

    }else if(pchica()/c==1){
        while (n<=c-1) {
            var calc=(Math.pow(pchica(),n)/factorial(n));
            suma=suma+calc;
            n++;
        }
        suma=suma+((Math.pow(pchica(),c)/factorial(c))*(nmayus-c+1));
        suma=Math.pow(suma,-1);
        suma=suma.toFixed(5);
        return suma
    }
     
}

function p_n(){
    var n=parseFloat(document.getElementById("n").value);
    var c=parseFloat(document.getElementById("c").value);
    var nmayus=parseFloat(document.getElementById("nmayus").value);
    if (0<=n & n<c){
        var pn=(Math.pow(pchica(),n)/factorial(n))*p_0();
        pn=pn.toFixed(5);
        return pn
    }else if(c<=n & n<=nmayus){
        var pn=(Math.pow(pchica(),n)/(factorial(c)*Math.pow(c,n-c)))*p_0();
        pn=pn.toFixed(5);
        return pn
    }
}

function lambda_efec(){
    var lambda=parseFloat(document.getElementById("lambda").value);
    var n=parseFloat(document.getElementById("nmayus").value);
    var nmayus=parseFloat(document.getElementById("nmayus").value);
    var c=parseFloat(document.getElementById("c").value);
    if (0<=n & n<c){
        var pn=(Math.pow(pchica(),n)/factorial(n))*p_0();
        pn=pn.toFixed(5);
       
    }else if(c<=n & n<=nmayus){
        var pn=(Math.pow(pchica(),n)/(factorial(c)*Math.pow(c,n-c)))*p_0();
        pn=pn.toFixed(5);
       
    }
    var lambdaefec=lambda*(1-pn);
    lambdaefec=lambdaefec.toFixed(5);
    return lambdaefec
}

function l_s(){
    var ls=parseFloat( l_q())+parseFloat(pchica());
    ls=ls.toFixed(5);
    return ls
}

function l_q(){
    var c=parseFloat(document.getElementById("c").value);
    var nmayus=parseFloat(document.getElementById("nmayus").value);
    var lq=(((Math.pow(pchica(),c+1))/(factorial(c-1)*Math.pow(c-pchica(),2))))*(1-Math.pow(pchica()/c,nmayus-c+1)-((nmayus-c+1)*(1-(pchica()/c))*(Math.pow(pchica()/c,nmayus-c))))*p_0();
    lq=lq.toFixed(5);
    return lq
}


function w_q(){
    wq=l_q()/lambda_efec();
    wq=wq.toFixed(5);
    return wq
}

function w_s(){
    var ws=l_s()/lambda_efec();
    ws=ws.toFixed(5);
    return ws
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}