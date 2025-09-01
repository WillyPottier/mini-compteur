let compteur = 0; //valeur de départ
let affichage = document.getElementById("valeur");
let cube = document.getElementById("cube");

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
};

function scaleCube() {
    
};

document.getElementById("plus").addEventListener("click", function () {

    if (compteur < 20) {
        compteur++;
    }
    updateCube();
});

document.getElementById("moins").addEventListener("click", function () {

    if (compteur > 0) {
        compteur--;
        }
    updateCube();
});