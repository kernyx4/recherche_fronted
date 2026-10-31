console.log("--- EXERCICE 5 ---");

// 1. Extraire l'identité
function extraireIdentite(etudiant) {
  const { prenom, nom, filiere } = etudiant;
  return { prenom, nom, filiere };
}

// 2. Calculer la moyenne d'un tableau de notes
function calculerMoyenneNotes(notes = []) {
  if (notes.length === 0) return 0;
  const somme = notes.reduce((acc, note) => acc + note, 0);
  return somme / notes.length;
}

// 3. Ajouter une note sans modifier l'original (immutabilité)
function ajouterNote(etudiant, nouvelleNote) {
  return {
    ...etudiant,
    notes: [...etudiant.notes, nouvelleNote]
  };
}

// 4. Créer un résumé complet
function creerResume(etudiant, options = []) {
  const identite = extraireIdentite(etudiant);
  const moyenne = calculerMoyenneNotes(etudiant.notes);
  return {
    ...identite,
    moyenne,
    options: [...options]
  };
}

// 5. Tests et vérification de non-mutation
const etudiantInitial = {
  nom: "Ndiaye",
  prenom: "Awa",
  filiere: "IAGE",
  notes: [12, 15, 11]
};

const etudiantMisAJour = ajouterNote(etudiantInitial, 16);
const resume = creerResume(etudiantMisAJour, ["Anglais", "Algorithmique"]);

console.log("Identité extraite :", extraireIdentite(etudiantInitial));
console.log("Moyenne initiale :", calculerMoyenneNotes(etudiantInitial.notes));
console.log("Moyenne tableau vide :", calculerMoyenneNotes([]));

console.log("Nouvel étudiant (avec note 16) :", etudiantMisAJour);
console.log("Résumé :", resume);

// Vérification d'immutabilité
console.log("Vérification : l'objet initial est-il intact ?", 
  etudiantInitial.notes.length === 3
);