


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
    }
}

const entries = Object.entries(japaneseRestaurant.workingHours);
//console.log(entries);

/*

for(const entry of entries){
    console.log(entry[0], entry[1]);
}

*/

for(const [name, hours] of entries){
    console.log(name, hours);
}