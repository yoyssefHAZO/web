let cons=0;
let mm=document.querySelector("p");
function as()
{ 
    cons+=1;
//    pp.innerHTML-=1;    console.log(cons);   console.log(typeof(cons));
    
     if(cons > 6)
        {
//            clearTimeout(counter);     console.log("youssef");
            let asn=document.getElementById("pp");
            asn.style.display="none";
            let all_e0=document.getElementById("all_e0");let all_e1=document.getElementById("all_e1");
            let all_e2=document.getElementById("all_e2");let all_e3=document.getElementById("all_e3");
            let all_e4=document.getElementById("all_e4");let all_e5=document.getElementById("all_e5");
            let all_e6=document.getElementById("all_e6");let all_e7=document.getElementById("all_e7");
            let all_e8=document.getElementById("all_e8");let all_e9=document.getElementById("all_e9");
            let all_e10=document.getElementById("all_e10");let all_e11=document.getElementById("all_e11");
            let all_e12=document.getElementById("all_e12");let all_e13=document.getElementById("all_e13");
            let all_e14=document.getElementById("all_e14");let all_e15=document.getElementById("all_e15");
            all_e0.style.display="inline";all_e1.style.display="inline";all_e2.style.display="inline";all_e3.style.display="inline";
            all_e7.style.display="inline";all_e6.style.display="inline";all_e5.style.display="inline";all_e4.style.display="inline";
            all_e11.style.display="inline";all_e10.style.display="inline";all_e9.style.display="inline";all_e8.style.display="inline";
            all_e15.style.display="inline";all_e14.style.display="inline";all_e13.style.display="inline";all_e12.style.display="inline";
            return;
        }
    else
        {
         mm.innerHTML-=1;   
        }
}
//let all_elmen=document.getElementsByClassName("all_e");
//let all_elmen=document.getElementById("all_e");
let mybtm=document.getElementById("btm");
mybtm.onclick=function ()
{
    let counter=setInterval(as, 1000);
    let asn=document.getElementById("pp");
    asn.style.display="block";
    this.style.display="none";
//    document.write("<audio src ="youssef.mp3" autoplay> sory</audio>");
    }


