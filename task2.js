let total=0;
let dosa=0;
let pongal=0;
let idly=0;

function pongaladd()
{
     total+=35;
     document.getElementById("total-price").innerHTML=total
     pongal++;
     document.getElementById("pongal-count").innerHTML=pongal
     return total 
}
function idlyadd(){
    total+=20;
    document.getElementById("total-price").innerHTML=total
    idly++;
    document.getElementById("idly-count").innerHTML=idly
    return total
}
function dosaadd(){
    total+=40
    document.getElementById("total-price").innerHTML=total
    dosa++
    document.getElementById("dosa-count").innerHTML=dosa
    return total
}
function pongalsub()
{
    if(pongal==0)
    {
        alert("you don't order any idly")
    }
    else{
     total-=35;
     document.getElementById("total-price").innerHTML=total
     pongal--;
     document.getElementById("pongal-count").innerHTML=pongal
     return total
    }
}
function idlysub(){
    if(idly==0){
        alert("you dont order any idly")
    }
    else{
    total-=20;
    document.getElementById("total-price").innerHTML=total
    idly--;
    document.getElementById("idly-count").innerHTML=idly
    return total
    }
}
function dosasub(){
    if(dosa==0){
        alert("you don't order any dosa")
    }
    else{
    total-=40
    document.getElementById("total-price").innerHTML=total
    dosa--;
    document.getElementById("dosa-count").innerHTML=dosa
    return total
    }
}