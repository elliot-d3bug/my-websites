const temp=document.getElementById("baba");
const farn=document.getElementById("f");
const cel=document.getElementById("c");
const res=document.getElementById("result");
let tem;



function conver(){
  if(farn.checked){
    tem=temp.value*(9/5)+32;
res.textContent=`${tem}`;
  }
  else if(cel.checked){
tem=(temp.value-32)*9/5;
res.textContent=`${tem}`
  }
  else{
  res.textContent='select a unit boss';
  }
}