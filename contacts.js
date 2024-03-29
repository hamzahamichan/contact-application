// const form = document.getElementById('groupe');
//const inputs = form.queryselectorAll('input');
  // form.addEventListener("Submit",Submithandler);
//function Submithandler(e){ 
 // e.preveventDefault();
  //inputs.forEach(input=> {
//if(input.value.trim()===""){
//  input.nextElementSibling.textcontent = `$ 
//  {input.dataset.type} is required`;
//} 
//  else if(
////input.dataset.type==="email" && 
//  !input.value.trim().includes("@gmail.com")){
////input.nextElementSibling.textcontent = `
////email format invalide`;
//  }else{
////input.nextElementSibling.textcontent ="";
//  }
//});
//} 


//function stocker(){
// let groupe=document.getElementById("groupe").value;
// localStorage.setItem("hamza",groupe);
// }
var phoneError = document.getElementById();

function validatephone(){
  var phone = document.getElementById('télephone').value;
   if(phone.length==0){
    phoneError.innerHTML='phone no is required';
    return false ;
   }
   if(phone.length !==10){
    phoneError.innerHTML='phone no should be 10 digits';
    return false ;
   }
   if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='only digits please';
    return false ;
   }
   phoneError.innerHTML= '<i class="fas fa-check-circle"></i>';
   return true;
}
 

