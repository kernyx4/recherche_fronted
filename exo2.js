// Données de départ
const etudiant = {
  nom: "Diop",
  prenom: "Awa",
  filiere: "IAGE",
  niveau: "L2",
  notes: [14, 12, 16, 8]
};

console.log("--- EXERCICE 2 ---");

// 1. Destructuring d'objet : nom, prenom, filiere
const { nom, prenom, filiere } = etudiant;

// 2. Renommage : niveau -> classe
const { niveau: classe } = etudiant;

// 3. Destructuring de tableau : 1ère, 2ème et dernière note
const [premiereNote, deuxiemeNote, , derniereNote] = etudiant.notes;

// 4. Extraction 1ère et 3ème note en ignorant la 2ème
const [note1, , note3] = etudiant.notes;

// 5. Valeur par défaut pour email (propriété absente)
const { email = "awa23@gmail.com" } = etudiant;

// 6. Phrase de présentation
console.log(`L'étudiant(e) ${prenom} ${nom} est inscrit(e) en ${filiere} (${classe}).`);
console.log("Notes extraites :", { premiereNote, deuxiemeNote, derniereNote, note1, note3 });
console.log("Email :", email);