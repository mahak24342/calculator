const screenDisplay=document.querySelector('.screen');
const buttons=document.querySelector('button');
 

let calculation=[];
let accumlativeCaculation;
function calculate(button){
const value=button.textContent;
if(value=="CLEAR"){
    calculation=[];
    screenDisplay.textContent="0";

}else if(value=="="){
    screenDisplay.textContent=eval(accumlativeCaculation);
    calculation=[];
    accumlativeCaculation="";

}
else{
    calculation.push(value);
    accumlativeCaculation=calculation.join('');
    screenDisplay.textContent=accumlativeCaculation;

}
}
buttons.forEach(button=>button.addEventListener('click',()=>calculate(button)));
