


const japaneseRestaurant = {
    name: "Banzai",
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', "Sushi", "Vegetarian", "Organic"],
    appetizers: ['Seaweed Salad', "Tempura shrimp", "Sushi rice"],
    mainMenu: ["Sushi", "Ramen", "Temoura"],
    workingHours: {
        wednesday: {
            open: 10,
            close: 23
        },
        friday: {
            open: 10,
            close: 23
        },
        saturday: {
            open: 12,
            close: 23
        },
        sunday: {
            open: 12,
            close: 23
        }

    },
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]]
    },
    foodDelivery: function({deliveryTime, appetizersIndex, adress}){
        //console.log(obj);
        console.log(`Your order on the way to you. Will arrived to ${adress} at ${deliveryTime}. Your order is ${this.appetizers[appetizersIndex]} `);
    },

    orderSushi: function(ing1, ing2, ing3){
        console.log(` You have ordered Sushi with ${ing1}, ${ing2}, ${ing3}`);
    }
}

// Rest Operator with Arrays

//const arr = [1, 2, ...[3,4]];
//console.log(arr);

//const [e1, e2, ...items] = [1, 2, 3, 4];
//console.log(items);

const [seaweed, , sushiRice, ...otherFood] = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
console.log(seaweed, sushiRice, otherFood);


// Rest Operator with Objects

const {saturday, sunday, ...weekdays} = japaneseRestaurant.workingHours;
console.log(weekdays);


// Rest pattern with functions

const sum = function(...nums){
    
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    console.log(sum);
}

sum(1, 1);
sum(1, 2, 3);


/*

japaneseRestaurant.foodDelivery({
    deliveryTime: "18:30",
    adress: 'streetName',
    appetizersIndex: 2
});


const arr = [1, 3, 5];
const newArr = [4, 9];

const spreadArray = [6, ...arr, ...newArr];
console.log(spreadArray);
console.log(...spreadArray);

*/

//const newMenu = [...japaneseRestaurant.mainMenu, "Miso", "Soup"];
//console.log(newMenu);

//const categoriesCopy = [...japaneseRestaurant.categories];
//console.log(categoriesCopy);

//const newMenu = [...japaneseRestaurant.mainMenu, ...japaneseRestaurant.appetizers];
//console.log(newMenu);

/*

const str = "Dima";
//const strArr = [str];
const strArr = [...str];
console.log(...str);
console.log(strArr);

*/

/*

const ingredients = [prompt(`Ingredient 1 for your sushi`), prompt(`Ingredient 2 for your sushi`), prompt(`Ingredient 3 for your sushi`)];
console.log(ingredients);
console.log(...ingredients);

japaneseRestaurant.orderSushi(...ingredients);

*/



const newJapaneseRestautant = {...japaneseRestaurant, owner: "OwnerName OwnerSurname"};
console.log(newJapaneseRestautant);

const japaneseRestaurantCopy = {...japaneseRestaurant};
japaneseRestaurantCopy.name = "New Restaurant Name";

console.log(japaneseRestaurant.name);
console.log(japaneseRestaurantCopy.name);