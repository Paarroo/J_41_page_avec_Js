console.log("—1————————————————————————————————————————————————————————————————————————————————\n");

let footer = document.querySelector('footer');
footer.addEventListener('click', function(){
  console.log("clique");
});

console.log("—1_bis————————————————————————————————————————————————————————————————————————————\n");
let compteur = 0;
footer.addEventListener('click', function(){
  compteur++;
  console.log(`nb clique : ${compteur}` );

});


console.log("—2————————————————————————————————————————————————————————————————————————————————\n");
const hambergerBoutton = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');

hambergerBoutton.addEventListener('click', function(){
  navbarHeader.classList.toggle('collapse');
  console.log('hambergurBoutton cliqué, rm collapse');
});
console.log("—3————————————————————————————————————————————————————————————————————————————————\n");
const cards = document.querySelectorAll('.card');

const premiereCard = cards[0];

const boutonEditPremiere = premiereCard.querySelector('.btn-outline-secondary');

const textePremiere = premiereCard.querySelector('.card-text');

boutonEditPremiere.addEventListener('click', function() {
    textePremiere.style.color = 'red';

    console.log('Texte de la première card mis en rouge');
});
console.log("—4————————————————————————————————————————————————————————————————————————————————\n");
const deuxiemeCard = cards[1];
const boutonEditDeuxieme = deuxiemeCard.querySelector('.btn-outline-secondary');
const texteDeuxieme = deuxiemeCard.querySelector('.card-text');

boutonEditDeuxieme.addEventListener('click', function() {
    if (texteDeuxieme.style.color === 'green') {
        texteDeuxieme.style.color = '';
        console.log('Texte de la deuxième card reset');
    } else {
        texteDeuxieme.style.color = 'green';
        console.log('Texte de la deuxième card mis en vert');
    }
});
console.log("—5————————————————————————————————————————————————————————————————————————————————\n");

const navbar = document.querySelector('.navbar');

const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

navbar.addEventListener('dblclick', function() {

    if (bootstrapLink.disabled) {
        bootstrapLink.disabled = false;
        console.log('Bootstrap réactivé');
    } else {
        bootstrapLink.disabled = true;
        console.log('Bootstrap désactivé - Mode nucléaire activé!');
    }
});


console.log("—6————————————————————————————————————————————————————————————————————————————————\n");



console.log("—7————————————————————————————————————————————————————————————————————————————————\n");




console.log("—8————————————————————————————————————————————————————————————————————————————————\n");



console.log("—9————————————————————————————————————————————————————————————————————————————————\n");
