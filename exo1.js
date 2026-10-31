// 1. Calcul de la moyenne
function calculerMoyenne(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}

// 2. Vérification de l'admission
function estAdmis(moyenne) {
  return moyenne >= 10;
}

// 3. Calcul du prix TTC avec taux par défaut (18%)
function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
  return prixHT * (1 + tauxTVA);
}

// 4. Fonction fléchée pour convertir les heures en minutes
const convertirEnMinutes = (heures) => heures * 60;

// 5. Tests
console.log("--- EXERCICE 1 ---");
console.log("Moyenne (12, 14, 15) :", calculerMoyenne(12, 14, 15));
console.log("Moyenne cas limite (10, 10, 10) :", calculerMoyenne(10, 10, 10));

console.log("Est admis (12) :", estAdmis(12));
console.log("Est admis cas limite (10) :", estAdmis(10));
console.log("Est admis (9.5) :", estAdmis(9.5));

console.log("Prix TTC par défaut (1000) :", calculerPrixTTC(1000));
console.log("Prix TTC avec TVA 20% (1000, 0.20) :", calculerPrixTTC(1000, 0.20));

console.log("Convertir 2h en minutes :", convertirEnMinutes(2));
console.log("Convertir 0.5h en minutes :", convertirEnMinutes(0.5));