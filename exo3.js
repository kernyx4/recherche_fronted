const groupeA = ["Moussa", "Fatou", "Ousmane"];
const groupeB = ["Amina", "Ibrahima"];

const etudiantBase = { nom: "Sow", prenom: "Omar", niveau: "L2" };
const coordonnees = { ville: "Dakar", telephone: "770000000" };
const contact = { email: "omar@mail.sn", telephone: "780000000" };

console.log("--- EXERCICE 3 ---");

// 1. Rassembler les deux groupes
const tousLesEtudiants = [...groupeA, ...groupeB];
console.log("Tous les étudiants :", tousLesEtudiants);

// 2. Copie de groupeA + ajout de "Cheikh" sans modifier l'original
const groupeACopie = [...groupeA, "Cheikh"];
console.log("Groupe A original :", groupeA);
console.log("Groupe A copie :", groupeACopie);

// 3. Enrichir etudiantBase
const etudiantComplet = { ...etudiantBase, age: 22, ville: "Dakar" };
console.log("Étudiant complet :", etudiantComplet);

// 4. Copie avec remplacement du niveau par "L3"
const etudiantL3 = { ...etudiantBase, niveau: "L3" };
console.log("Original (niveau) :", etudiantBase.niveau); // L2
console.log("Copie (niveau) :", etudiantL3.niveau); // L3

// 5. Fusion de coordonnees et contact
const profil = { ...coordonnees, ...contact };
console.log("Profil fusionné :", profil); 
// La propriété 'telephone' de contact écrase celle de coordonnees