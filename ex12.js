const produits = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];
  
function ajouterTva(produits) {
    const TAB = []
    for (let i = 0; i < produits.length; i++) {
        produits[i].price = produits[i].price + (produits[i].price * 20 / 100)   
        TAB.push(produits[i]) 
    }
    return TAB
}
  
console.log(ajouterTva(produits)); // Output : [{ name: 'Laptop', price: 1200 }, { name: 'Phone', price: 600 }, { name: 'Tablet', price: 360 }]