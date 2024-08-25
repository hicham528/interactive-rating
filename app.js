let choice = document.querySelectorAll(".choice span");
let submit_btn = document.getElementById("submit_btn");
let questions_content = document.querySelector(".questions_content");
let header = document.querySelector(".header");
let result = document.querySelector(".result");
let pointe_view = document.querySelector(".pointe_view");
choice.forEach((btn) => {
  btn.onclick = (e) => {
    choice.forEach((c) => c.classList.remove("active"));
    e.target.classList.toggle("active");
  };
});
submit_btn.onclick = () => {
  let selectedChoice=null;
  choice.forEach((item) => {
   if(item.classList.contains("active")){
    selectedChoice=item.getAttribute("value");
   }
   if(selectedChoice){
    pointe_view.innerHTML=`you are selected ${selectedChoice} from ${choice.length}`
   }else{
    pointe_view.innerHTML="No choice selected. Please select an option."
   }
  });
choice.forEach(item=>item.style.display="none")
  submit_btn.style.display="none";
  questions_content.innerHTML="";
  header.style.display="none"
  result.style.display="flex"
};
