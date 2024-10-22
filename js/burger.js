var burgerMenu = document.querySelector('.burger-block');
var buttonBurger = document.querySelector('.burger');

var about = document.getElementById('about');
var aboutBlock = document.getElementById('aboutBlock');

var services = document.getElementById('services');
var servicesBlock = document.getElementById('servicesBlock');

var price = document.getElementById('price');
var priceBlock = document.getElementById('priceBlock');

var advantages = document.getElementById('advantages');
var advantages2 = document.getElementById('advantages2');
var advantagesBlock = document.getElementById('advantagesBlock');

var contact = document.getElementById('contact');
var contactBlock = document.getElementById('contactBlock');

var zakaz = document.getElementById('zakaz');
var zakazBlock = document.getElementById('zakazBlock');

var public = document.getElementById('public');
var publicBlock = document.getElementById('publicBlock');

buttonBurger.addEventListener('click', function(){
    if (buttonBurger.classList.contains('active')) {
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    } else {
        buttonBurger.classList.toggle('active');
        burgerMenu.style.display = 'flex';
    }
});

function scrollBlockHeader(element){
    element.scrollIntoView({
        block: "start", 
        inline: "nearest"
    });
}

about.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(aboutBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
        event.preventDefault(); 
    scrollBlockHeader(aboutBlock);
    }
});

services.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(servicesBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
        event.preventDefault(); 
    scrollBlockHeader(servicesBlock);
    }
});

price.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(priceBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
        event.preventDefault();
    scrollBlockHeader(priceBlock);
    }
});

advantages.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(advantagesBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
        event.preventDefault();
    scrollBlockHeader(advantagesBlock);
    }
});

advantages2.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(advantagesBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
        event.preventDefault();
    scrollBlockHeader(advantagesBlock);
    }
});

contact.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(contactBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
    event.preventDefault();
    scrollBlockHeader(contactBlock);
    }
});

zakaz.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(zakazBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
    event.preventDefault();
    scrollBlockHeader(zakazBlock);
    }
});

public.addEventListener('click', function(event){
    if (window.innerWidth < 900) {
        event.preventDefault(); 
        scrollBlockHeader(publicBlock);
        buttonBurger.classList.remove('active');
        burgerMenu.style.display = 'none';
    }else{
    event.preventDefault();
    scrollBlockHeader(publicBlock);
    }
});