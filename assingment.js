var cir = document.querySelector("#container");

function rot1(){
    cir.style.transition="transform 1s, background-image 1s"
    cir.style.transform="rotateY(2160deg)"
    cir.style.backgroundImage="url(../../assets/images/2.jpg)"
}

function rot2(){
    cir.style.transition="transform 1s, background-image 1s"
    cir.style.transform="rotateY(4320deg)"
    cir.style.backgroundImage="url(../../assets/images/3.jpg)"
}

function rot3(){
    cir.style.transition="transform 1s, background-image 1s"
    cir.style.transform="rotateY(0deg)"
    cir.style.backgroundImage="url(../../assets/images/4.jpg)"
}

var num=0;
function fun(){
    num++;
    if(num==1)
    {
        setTimeout(rot1,1000)
    }
    else if(num==2)
    {
        setTimeout(rot2,1000)
    }
    else
    {
        setTimeout(rot3,1000);
        num=0;
    }
}
setInterval(fun,2000);