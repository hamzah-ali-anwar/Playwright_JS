
/**You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

Use the filter method to create a new array called affordableProducts containing only products priced below $50

Calculate the total cost of all items in the affordableProducts array using the reduce method. */

const productPrices = [60, 45, 80, 30, 55, 20]
const discountedPrices = productPrices.map(applyDiscount => applyDiscount * 0.9)

const affordableProducts = discountedPrices.filter(price => price < 50)
const costOfAll = affordableProducts.reduce((sum, num) => sum + num, 0)

console.log('Product Prices: ' + productPrices)
console.log('Discounted Prices: ' + discountedPrices)
console.log('Affordable products: ' + affordableProducts)
console.log('Total: $' + costOfAll)
