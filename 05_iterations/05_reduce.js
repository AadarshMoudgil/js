const myNums =[1,2,3]
const myTotal = myNums.reduce((acc,currentVal)=> {
    console.log(`acc: ${acc}, currentVal: ${currentVal}`);
    
    return acc+currentVal
},0)

// console.log(myTotal);

const items = [
  { itemName: "Laptop", price: 1200, discount: 150, finalPrice: 1050 },
  { itemName: "Headphones", price: 200, discount: 25, finalPrice: 175 },
  { itemName: "Monitor", price: 350, discount: 50, finalPrice: 300 },
  { itemName: "Smartwatch", price: 400, discount: 60, finalPrice: 340 }
];

const allItemPrice = items.reduce((acc,item)=> acc+item.price, 0)
console.log(allItemPrice);

