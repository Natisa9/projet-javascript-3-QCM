
// AFFICHER LE RESULTAT calcul du SCORE LA QUESTION LES 4 POSSIBILITES DE REPONSES(avec les boutons)
let results = document.getElementById('results');
let questions = document.getElementById("question");
let score = 0//créer variable pour le score

let bouton = document.getElementById("reponsea");
let bouton1 = document.getElementById("reponseb");
let bouton2 = document.getElementById("reponsec");
let bouton3 = document.getElementById("reponsed");
// Créer une variable pour passer à la question suivante
let i = 0
// Créer variable rejouez quand la partie est finie
let fini = document.getElementById("rejouez");
//PHRASE FINALE ATTENTION VA SE TROUVER DANS LA FONCTION afficher
let felicitations = document.getElementById("YOU-ARE-THE-BEST");
// IMAGE SMILEY (image insérée en html)
let image = document.getElementById("image");
//AUDIO APPLAUDISSEMENTS
let applaudissements = new Audio("son.wav");
//VARIABLE QUESTIONS REPONSES bonne réponse, tableau créé
let myQuestions = [{
    question: "QUELLE EST LA CAPITALE DU CANADA ?",
    answers: "OTTAWA", a: "PARIS", b: "ANTANANARIVO", c: "BANGUI", d: "OTTAWA"
},
{
    question: "COMBIEN Y A-T'IL D'ETOILES SUR LE DRAPEAU AMERICIAIN ?",
    answers: 50, a: 45, b: 55, c: 50, d: 60
},
{
    question: "QUI A INVENTE LE JAVASCRIPT ?",
    answers: "BRENDAN EICH", a: "DOUGLAS", b: "BRENDAM EICH", c: "SHERYL", d: "ENZO"
},
{
    question: "QUEL EST LE 1ER MINISTRE FRANCAIS AU 24 JANVIER 2024?",
    answers: "GABRIEL ATTAL", a: "GABRIEL ATTAL", b: "BRUNO LE MAIRE", c: "GERALD DARMANI", d: "ELISABETH BORNE"
},
{
    question: "COMBIEN DE PAYS FONT PARTIE DE L'UNION EUROPEENNE ?",
    answers: 28, a: 26, b: 28, c: 24, d: 21
},
{
    question: "QUI EST ANGELE ?",
    answers: "UNE CHANTEUSE", a: "UNE ACTRICE", b: "UNE SPRINTEUSE", c: "UNE CHANTEUSE", d: "UN ANGE"
},
{
    question: "QUI EST ANDRE ?",
    answers: "NOTRE FORMATEUR", a: "UN ACTEUR", b: "UN SPRINTEUR", c: "UN CHANTEUR", d: "NOTRE FORMATEUR"
},
{
    question: "QUI ETAIT CHARLES AZNAVOUR ?",
    answers: " UN CHANTEUR", a: "UN MINISTRE", b: "UN JOKEY", c: "UN CHANTEUR", d: "UN ALPINISTE"
},
{
    question: "QUI A INVENTE LE HTML ?",
    answers: " TIM BERNERS-LEE", a: "UN MINISTRE", b: "TIM BERNERS-LEE", c: "GAINSBOURG", d: "UN ALPINISTE"
},
{
    question: "QUEL EST LE DOUDOU D'HELDER ?",
    answers: " INDETERMINE", a: "INDETERMINE", b: "UN OURS", c: "UN LAPIN", d: "UN CRAPAUD"
},
]

function afficher() {
    //si tableau a atteint les 10 questions, bouton rejouez s'affiche en rouge
    if ([i] > 9) {
        fini.innerHTML = "rejouez";
        fini.style.backgroundColor = "red";
        bouton.disabled = true;//les 10 questions ont été poséees les boutons sont désactivés
        bouton1.disabled = true;
        bouton2.disabled = true;
        bouton3.disabled = true;

        bouton.innerText = "";//le texte n'apparaît plus sur les boutons
        bouton1.innerText = "";
        bouton2.innerText = "";
        bouton3.innerText = "";

        felicitations.innerHTML = "YOU-ARE-THE-BEST";

        image.src = "smiley.jfif";
        applaudissements.play()//applaudissements

    }
    //affiche la 1ère question,appeler la variable, afficher dans le html,

    //tableau avec plusieurs questions d'où tableau []avec index i, idem pour les 4 BOUTONS, mettre la question et les réponses (qui sont les boutons) dans une fonction
    questions.innerHTML = myQuestions[i].question

    bouton.innerHTML = myQuestions[i].a
    bouton1.innerHTML = myQuestions[i].b
    bouton2.innerHTML = myQuestions[i].c
    bouton3.innerHTML = myQuestions[i].d

    console.log(score);
}

// en cliquant sur le bouton
bouton.addEventListener("click", function () {
    //si réponse vraie du bouton html 
    if (myQuestions[i].answers == bouton.innerHTML) {
        score++//CUMUL RESULTATS
        results.innerHTML = score; //AFFICHER 
        i++//variable i créée pour passer question suivante
    }
    else { i++ }//sinon passer question suivante
    afficher()

})
bouton1.addEventListener("click", function () {
    if (myQuestions[i].answers == bouton1.innerHTML) {
        score++//CUMUL RESULTATS
        results.innerHTML = score; //AFFICHER 
        i++
    }
    else { i++ }
    afficher()

})
bouton2.addEventListener("click", function () {
    if (myQuestions[i].answers == bouton2.innerHTML) {
        score++//CUMUL RESULTATS
        results.innerHTML = score; //AFFICHER 
        i++//permet de passer à la question suivant
    }
    else { i++ }
    afficher()
})
bouton3.addEventListener("click", function () {
    if (myQuestions[i].answers == bouton3.innerHTML) {
        score++//CUMUL RESULTATS
        document.getElementById('results').innerHTML = score; //AFFICHER 
    }
    else { i++ }
    afficher()//permet d'afficher
})
afficher()

// LA PARTIE EST RELANCEE 
fini.addEventListener("click", function () {
    score = 0//REMETTRE LE COOMPTEUR A ZERO
    results.innerHTML = 0 //AFFICHER A L'ECRAN
    i = 0//REVENIR A LA PREMIERE QUESTION
    afficher()
    bouton.disabled = false;// les boutons sont réactivés
    bouton1.disabled = false;
    bouton2.disabled = false;
    bouton3.disabled = false;

    fini.style.backgroundColor = "green";//LA COULEUR DU BOUTON SE REMET AU VERT
    //les félicitations ne s'affichent plus
    felicitations.innerHTML = "";
    //L'image ne s'affiche plus
    image.src = "";

})
