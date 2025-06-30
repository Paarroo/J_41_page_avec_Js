console.log("—1————————————————————————————————————————————————————————————————————————————————\n");

let footer = document.querySelector('footer');
footer.addEventListener('click', function(){
  console.log("clique");
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
        console.log('Texte de la deuxième card remis à la normale');
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

for (let i = 0; i < cards.length; i++) {
    const boutonView = cards[i].querySelector('.btn-primary');
    const texteCard = cards[i].querySelector('.card-text');
    const imageCard = cards[i].querySelector('.card-img-top');

    boutonView.addEventListener('mouseenter', function() {
        texteCard.classList.add('collapse');

        imageCard.style.width = '20%';

        console.log(`Card ${i + 1} réduite`);
    });

    boutonView.addEventListener('mouseleave', function() {
        texteCard.classList.remove('collapse');

        imageCard.style.width = '';

        console.log(`Card ${i + 1} restaurée`);
    });
}

console.log("—7————————————————————————————————————————————————————————————————————————————————\n");

const boutonGauche = document.querySelector('.btn-secondary');
const conteneurCards = document.querySelector('.row');

boutonGauche.addEventListener('click', function() {
    const toutesLesCards = conteneurCards.querySelectorAll('.col-md-4');

    const derniereCard = toutesLesCards[toutesLesCards.length - 1];

    conteneurCards.insertBefore(derniereCard, toutesLesCards[0]);

    console.log('Rotation des cards vers la gauche');
});



console.log("—8————————————————————————————————————————————————————————————————————————————————\n");
const boutonDroite = document.querySelector('.btn-primary');

boutonDroite.addEventListener('click', function(event) {
    event.preventDefault();

    const toutesLesCards = conteneurCards.querySelectorAll('.col-md-4');
    const premiereCard = toutesLesCards[0];

    const elementSuivant = toutesLesCards[toutesLesCards.length - 1].nextSibling;

    if (elementSuivant) {
        conteneurCards.insertBefore(premiereCard, elementSuivant);
    } else {
        conteneurCards.appendChild(premiereCard);
    }

    console.log('Rotation des cards vers la droite');
});
console.log("—9————————————————————————————————————————————————————————————————————————————————\n");
const logo = document.querySelector('.navbar-brand');
const body = document.body;

logo.setAttribute('tabindex', '0');

logo.addEventListener('keypress', function(event) {
    const touche = event.key.toLowerCase();

    body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');

    switch(touche) {
        case 'a':
            body.classList.add('col-4');
            console.log('Page condensée à gauche');
            break;

        case 'y':
            body.classList.add('col-4', 'offset-md-4');
            console.log('Page condensée au centre');
            break;

        case 'p':
            body.classList.add('col-4', 'offset-md-8');
            console.log('Page condensée à droite');
            break;

        case 'b':
            console.log('Page remise à la normale');
            break;

        default:
            console.log(`Touche ${touche} non reconnue`);
    }
});

console.log('🎉 Script JavaScript chargé avec succès !');
console.log('📋 Fonctionnalités disponibles :');
console.log('1. Clic sur footer (compteur)');
console.log('2. Menu hamburger (toggle)');
console.log('3. Edit première card (rouge)');
console.log('4. Edit deuxième card (vert toggle)');
console.log('5. Double-clic navbar (mode nucléaire)');
console.log('6. Survol boutons View (réduction)');
console.log('7-8. Boutons navigation (rotation cards)');
console.log('9. Navigation clavier (focus logo puis a/y/p/b)');
