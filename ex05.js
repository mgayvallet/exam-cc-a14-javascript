function motDePasseValide(motDePasse) {
    if (motDePasse.length > 7) return "Valide"
    else return "Invalide"
}

console.log(motDePasseValide("azerty12"))    // Output: "Valide"
console.log(motDePasseValide("1234"))        // Output: "Invalide"