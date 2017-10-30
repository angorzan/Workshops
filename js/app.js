document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");


//rozwijanie submenu
var submenu = document.querySelector('.submenu');
console.log(submenu);
var li = document.querySelector('#menu > ul > li');

li.addEventListener("mouseover", function(){
    submenu.style.display = 'block';
    });
li.addEventListener("mouseout", function(){
    submenu.style.display = 'none';
});

var clair = document.querySelector('.clair');
var white_chair = document.querySelector('#white_chair');
white_chair.addEventListener("mouseover", function(){
clair.style.display = 'none';
});
white_chair.addEventListener("mouseout", function(){
clair.style.display = 'block';
});



//znikanie podpisów

var margarita = document.querySelector('.margarita');
var baby = document.querySelector('#baby');
baby.addEventListener("mouseover", function(){
margarita.style.display = 'none';
});
baby.addEventListener("mouseout", function(){
margarita.style.display = 'block';
});


//slider
var prev_btn = document.querySelector("#arrow-left");

var next_btn = document.querySelector("#arrow-right");

var lista = document.querySelectorAll(".slider li");
    console.log(lista);

lista[0].classList.add("visible");

var picIndex = 0;
prev_btn.addEventListener("click", function (event)	{
    lista[picIndex].classList.remove("visible");
    if (picIndex < lista.length - 1) {
       picIndex += 1;
     }
    else {
     picIndex = 0;
     }
    lista[picIndex].classList.add("visible");
      console.log("Liczba	kliknięć prawym przyciskiem",	picIndex);
    });


    var picIndex = 0;
 next_btn.addEventListener("click", function (event)	{
 lista[picIndex].classList.remove("visible");
   if (picIndex > 0) {
      picIndex -= 1;
        }
        else {
            picIndex = lista.length - 1;
        }
        lista[picIndex].classList.add("visible");
        console.log("Liczba	kliknięć lewym przyciskiem",	picIndex);
    })






});