let numsBtn=document.getElementsByClassName("number");
let operatorsBtn=document.getElementsByClassName("operator");
let decrementBtn=document.getElementById("decimal");
let ceBtn=document.getElementById("ce");
let cBtn=document.getElementById("c");
let disp=document.getElementById("display");
let sqrtBtn=document.getElementById("sqrt");
let negativBtn=document.getElementById("otr");
let result=0;
let secondInput=false;
let operIn="";

ceBtn.onclick=function(){
  disp.value=0;
  secondInput=false;
}

cBtn.onclick=function(){
  result=0;
  secondInput=false;
  operIn="";
  disp.value=0;
}

sqrtBtn.onclick = function (){
  operator("=");
  if (result<0) {
    disp.value="Error";
  }else{
    result=Math.sqrt(result);
    disp.value=result;
  }
}

negativBtn.onclick = function(){
  disp.value *= -1;
}

for (let i=0; i<operatorsBtn.length; i++){
  operatorsBtn[i].onclick= function (e){
    operator(e.target.innerText);
  }
}

for (let i=0; i<numsBtn.length; i++){
  numsBtn[i].onclick=function (e){
    number(e.target.innerText);
  }
}
function count(b){
  let a = result+"";
  if (a.indexOf(".")!=-1||b.indexOf(".")!=-1){
    return Math.max(a.length-1-a.indexOf("."),b.length-1-b.indexOf("."));
  }
  return 0;
}

function operator(oper){
  let localValue=disp.value;
  if (secondInput && operIn!="="){
    display.value = result;
  } else {
    secondInput=true;
    let coef=Math.pow(10, count(localValue));
     if (operIn=="+"){
       result*=coef;
       localValue *=coef;
      result += +localValue;
      result/=coef;
    }else if (operIn=="-"){
      result*=coef;
      localValue *=coef;
      result -= +localValue;
      result/=coef;
    }else if (operIn=="*"){
      result*=coef;
      localValue *=coef;
      result *= +localValue;
      result/=coef;
      result/=coef;
    }else if (operIn=="/"){
      result /= +localValue;
    }else if (operIn=="^"){
      result = Math.pow(result, +localValue);
    }else{
      result = +localValue;
    }
    disp.value = result;
    operIn = oper;
  }
}

function number(num){
 if (secondInput){
   disp.value=num;
   secondInput=false;
 } else {
    if (disp.value==="0"){
      disp.value=num;
    }else{
      disp.value+=num;
   }
  }
}

decrementBtn.onclick=function(){
  if (!disp.value.includes(".")) {
    disp.value+=".";
  }
}