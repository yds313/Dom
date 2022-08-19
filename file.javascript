let one = document.getElementById("sectionHomePage");
 let two = document.getElementById("sectionPlaces");
 let button = document.getElementById("buttonOne");
 let button1 = document.getElementById("buttonTwo");
 

 function manip() {
     two.textContent=one.textContent;
 }

 function manipulate() {
    one.textContent=two.textContent;

 }
 button.addEventListener("click", manipulate);
 button1.addEventListener("click", manip);