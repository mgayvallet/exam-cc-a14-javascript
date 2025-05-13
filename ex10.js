function differenceMaxMin(tableau) {
    let max = 0
    let min = tableau[0]
    let result

    for (let i = 0; i < tableau.length; i++) {
        if (max < tableau[i]) {
            max = tableau[i]
        }

        if (min > tableau[i]) {
            min = tableau[i]
        }

        result = max - min
    }
    return result
}
const tableau = [10, 5, 20, 8, 15];
console.log(differenceMaxMin(tableau)); // Output: 15