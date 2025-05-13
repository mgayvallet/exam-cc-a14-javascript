const orders = [
    { id: 1, products: [{ name: 'Laptop', price: 1000 }, { name: 'Mouse', price: 50 }] },
    { id: 2, products: [{ name: 'Phone', price: 600 }, { name: 'Charger', price: 30 }] },
    { id: 3, products: [{ name: 'Tablet', price: 300 }, { name: 'Case', price: 20 }] }
];

function findMostExpensiveProduct(orders, orderId) {
    if (parseInt(orders[orderId - 1].products[0].price) > parseInt(orders[orderId - 1].products[1].price)) {
        return orders[orderId - 1].products[0]
    } else return orders[orderId - 1].products[1]
}

console.log(findMostExpensiveProduct(orders, 1)); // Output : { name: 'Laptop', price: 1000 }