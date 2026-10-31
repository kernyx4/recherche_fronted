console.log("--- EXERCICE 4 ---");

// 1. Additionner un nombre variable d'arguments
function additionner(...nombres) {
  return nombres.reduce((acc, val) => acc + val, 0);
}

console.log("Somme de 2 valeurs (10, 20) :", additionner(10, 20));
console.log("Somme de 3 valeurs (5, 10, 15) :", additionner(5, 10, 15));
console.log("Somme de 5 valeurs (1, 2, 3, 4, 5) :", additionner(1, 2, 3, 4, 5));

// 2. Séparer le premier argument du reste
function afficherPremierEtAutres(premier, ...autres) {
  console.log("Premier :", premier);
  console.log("Autres :", autres);
}

afficherPremierEtAutres("HTML", "CSS", "JS", "React");

// 3. Créer une fiche d'étudiant avec compétences
function creerFiche(nom, filiere, ...competences) {
  return {
    nom,
    filiere,
    competences
  };
}

console.log("Fiche :", creerFiche("Kane", "Génie Logiciel", "Git", "JS", "SQL"));

// 4. Explication :
// Le paramètre rest (...) doit obligatoirement être placé à la fin
// car il collecte tous les arguments restants dans un tableau
// S'il était placé au début ou au milieu, JavaScript ne pourrait pas savoir
// où s'arrêtent les éléments du tableau et où commencent les autres paramètres