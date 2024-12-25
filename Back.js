// Déclaration des variables
let addToButton = document.getElementById('addTodo'); // Bouton pour ajouter une tâche
let toDoContainer = document.getElementById('toDoContainer'); // Conteneur où les tâches seront ajoutées
let inputfield = document.getElementById('inputfield'); // Champ de saisie pour la nouvelle tâche

// Ajouter un gestionnaire d'événements au bouton "addTodo"
addToButton.onclick = function Z() {

    // Vérifier si le champ d'entrée (input) n'est pas vide
    if (inputfield.value !== "") {

        // Créer un nouvel élément paragraphe (p) pour afficher la tâche
        let paragraph = document.createElement('p');

        // Ajouter une classe CSS pour styliser le paragraphe
        paragraph.classList.add('paragraphe_style');

        // Ajouter le texte saisi par l'utilisateur dans le paragraphe
        paragraph.innerText = inputfield.value;

        // Insérer le paragraphe dans le conteneur des tâches
        toDoContainer.appendChild(paragraph);

        // Vider le champ d'entrée après l'ajout de la tâche
        inputfield.value = "";

        // Ajouter un événement pour changer la couleur du paragraphe au clic
        paragraph.addEventListener('click', function () {
            this.style.backgroundColor = 'red'; // Changer la couleur de fond en rouge
        });
    }
};
