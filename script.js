let compteur = 0; //valeur de départ
const affichage = document.getElementById("valeur");
const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
const reset = document.getElementById("reset");
const message = document.getElementById("message");

function updateCube() {
   // 1. Mettre à jour le texte du compteur
   // 2. Vérifier si compteur >= 5 → afficher cube, sinon → cacher cube
   affichage.textContent = compteur;
   if (compteur < 5) {
    cube.style.display = "none";
    }  else if (compteur <= 10) {
        cube.style.backgroundColor = "orange";
        cube.style.display = "flex";
   } else {
    cube.style.display = "flex";
    cube.style.backgroundColor = "blueviolet";
   }
   // Mise à jour de l'échelle du cube
    const base = compteur - 5;
    const scale = Math.min(2, Math.max(1, 1 + base * 0.1));
    cube.style.transform = `scale(${scale})`;
};

function updateCube2() {
    if (compteur >= 10) {
        cube2.style.display = "flex";
    } else {
        cube2.style.display = "none";
    }
}

// Mise à jour du message
function updateMessage() {
    if (compteur < 5) {
        message.textContent = "Petit";
    } else if (compteur < 10) {
        message.textContent = "Moyen";
    } else {
        message.textContent = "Grand";
    }
}

// Event listener pour le bouton "+"
document.getElementById("plus").addEventListener("click", function () {

    if (compteur < 20) {
        compteur++;
    }
    updateCube();
    updateCube2();
    updateMessage();
});

// Event listener pour le bouton "-"
document.getElementById("moins").addEventListener("click", function () {

    if (compteur > 0) {
        compteur--;
        }
    updateCube();
    updateCube2();
    updateMessage();
});

//Remise à zéro du compteur
document.getElementById("reset").addEventListener("click", () => {
    compteur = 0;
    updateCube();
    updateCube2();
    updateMessage();
});