const Desplay=document.getElementById("display");
 Desplay.style.backgroundColor="white";
const but=document.querySelectorAll("button");
console.log(but)

let ArrayBut=Array.from(but);

 console.log(ArrayBut);
//console.log(ArrayBut);
let string = " ";

ArrayBut.forEach(function(ele){

ele.addEventListener("click",function(e){
    console.log()
      if(e.target.innerHTML =="DEL"){
      string =string.substring(0,string.length-1);
      Desplay.value=string;
     }
       else if(e.target.innerHTML=="C"){
       string=" ";
       Desplay.value=string;
       }
      else if(e.target.innerHTML=="="){
     
         string =eval(string);
         Desplay.value=string;

}
else{
    
     string +=e.target.innerHTML;

     Desplay.value=string;
   
     

}

})



})





  