const fruits = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 8 },
    { name: 'Mango', quantity: 3 }
  ];
  
function totalFruitQuantity(fruits) {
    let total = 0;
    for (let i = 0; i < fruits.length; i++) {
      total += fruits[i].quantity;
    }
    return total;
}
  
  console.log(totalFruitQuantity(fruits)); // Output : 26