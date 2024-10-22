//Fonction qui fait disparaitre les sections lorsque leur titre est cliqué
function disparait(div) {
  let contenu = document.getElementById(div);
  if (contenu.style.display === "none") {
    contenu.style.display = "block";
  }
  else {
    contenu.style.display = "none";
  }
}

//Fonction qui fait apparaitre un message d'alerte à la place d'envoyer le mail
function alertMessage() {
  let nom = document.getElementById("id_Nom").value;
  let prenom = document.getElementById("id_prenom").value;
  let message = "Désolé " + prenom + " " + nom + ", je n'ai que faire de ton commentaire, je ne l'enverrai pas !";
  alert(message);
//Ajout supplémentaire un son est jouer lorsque l'utilisateur écrit "goat" dans le formulaire
  if (nom.toLowerCase() === "goat") {
    let audio = new Audio('data/Son/goated.mp3');
    audio.volume = 0.5;
    audio.play();
  }
  return false;
}

 //Variables qui contiennent les sources et les légendes des différentes images
  let images = ["data/img/gallery/1_Limoges_Hotel_de_Ville.jpg","data/img/gallery/2_Limoges_Cour_du_Temple.jpg","data/img/gallery/3_Limoges_Gare_Benedictins.jpg","data/img/gallery/4_Limoges_Halles_Centrales.jpg","data/img/gallery/5_Limoges_Pont_St_Martial.jpg","data/img/gallery/6_Limoges_Rue_de_la_Boucherie.jpg","data/img/gallery/7_Cela_pourrait_etre_quoi.png"];
  let legende = ["Hôtel de ville de Limoges", "Cour du Temple de Limoges", "Gare des Bénédictins de Limoges", "Halles Centrales de Limoges", "Pont Saint-Martial de Limoges", "Rue de la Boucherie de Limoges", "Aucun rapport avec Limoges mais il en fallait bien une !"];
  let index = 0;
// fonction qui permet de changer les images suivant leur index dans la liste ainsi que leur légende
  function laGallerie() {
    let uneImage = document.querySelector("#gallery img");
    uneImage.src = images[index];

    let uneLegende = document.querySelector("#legende");
    uneLegende.textContent = legende[index];

    index=(index+1)%images.length
  }
  //L'intervalle entre lequelle l'image apparait, et est changer
  setInterval(laGallerie, 1000);

// Fonction qui permet de mélanger les enfants direct du body
function melangerBody() {
    let enfantsBody = document.body.children;
    let listeEnfants = Array.from(enfantsBody);
//Si Math.random() - 0.5 <0 alors l'élément va être décalé à gauche et à droite si Math.random() - 0.5 >0
    listeEnfants.sort(() => Math.random() - 0.5);

    listeEnfants.forEach(function(element) {
        document.body.removeChild(element);
    });
    listeEnfants.forEach(function(element) {
        document.body.appendChild(element);
    });
}

//Ecouteur qui va permettre de déclencher la fonction melangerBody lorsque l'image est cliquer
document.addEventListener("click", function(event) {
    if (event.target.matches("#gallery img")) {
        let goat = event.target;

        if (goat.src.includes("data/img/gallery/7_Cela_pourrait_etre_quoi.png")) {
            melangerBody();
            //ajout d'un son lorsque l'image est cliquée
            let audio = new Audio('data/Son/Goat.mp3');
            audio.play();
        }
    }
});

