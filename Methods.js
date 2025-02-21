// Js high order function and arrays
// I recommend you to watch traversy media youtube channel
// https://www.youtube.com/watch?v=rRgD1yVwIvE&t=0s
// map, filter, reduce, sort, forEach, find
// High order functions are functions that take other functions as arguments or return functions as their results.
// In other words, High order functions are functions that operate on other functions, either by taking them as arguments or by returning them.
// we will use this arrays to demonstrate the high order functions in js

const cars = [
    {name: "Toyota", model: "hilux", year: 2023},
    {name: "dodeg", model: "hell cat", year: 2018},
    {name: "porchas", model: "911", year: 2024},
    {name: "bmw", model: "m3", year: 2016},
    {name: "toyota", model: "supra", year: 2016},
    {name: "faw", model: "betsu", year: 2023},
    {name: "nissan", model: "gtr", year: 2016},
]

const ages = [11,12,13,14,21,55,66,77,88,99, 100];


//       F O R E A C H   L O O P         //

// forEach() method executes a provided function once for each array element.
// forEach() method does not return anything.
// it is used to perform a certain action on each element of an array.

cars.forEach(function(car){
    // console.log(car)
    console.log(car.name)
    // can accsess attributes specifcly
});

// shorter version of forEach using arrow function

cars.forEach(car => console.log(car.model));


//      M A P         //

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// map() method does not execute the function for empty elements.
// map() method does not change the original array.

const carNames = cars.map(function(car){
    return car.name;
});
console.log(carNames);

//---------------------------------------------------//

const carNamesAndModels = cars.map(function(car){
    return `${car.name} ${car.model}`;
});
console.log(carNamesAndModels);

// shorter version of map using arrow function

const carNames2 = cars.map(car => car.name);
const carNamesAndModels2 = cars.map(car => `${car.name} ${car.model}`);

//      F I L T E R      //

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter() method does not change the original array.
// filter() method does not execute the function for empty elements.

const candrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
    return false;
});
console.log(candrink);

//---------------------------------------------------//

const oldcars = cars.filter(function(car){
    if(car.year < 2020){
        return true;
    }
    return false;
});
console.log(oldcars);  

// shorter version of filter using arrow function

const candrink2 = ages.filter(age => age >=21);
const oldcars2 = cars.filter(car => car.year < 2020);

//      R E D U C E     //

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// reduce() method does not execute the function for empty elements.

const reduce = ages.reduce(function(total, age){
    return total + age;
}, 0);

//---------------------------------------------------//

const reduce2 = cars.reduce(function(total, car){
    return total + (car.year);
}, 0);

console.log(reduce);
console.log(reduce2);

// shorter version of reduce using arrow function
const reduce3 = ages.reduce((total, age) => total + age, 0);
const reduce4 = cars.reduce((total, car) => total + car.year, 0);

//      F I N D       //

// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// find() method does not execute the function for empty elements.

const find = ages.find(function(age){
    if(age > 50){
        return age;
    }
});
console.log(find);

//---------------------------------------------------//

const find2 = cars.find(function(car){
    if(car.year > 2020){
        return car;
    }
});
console.log(find2); 

// shorter version of find using arrow function
const find3 = ages.find(age => age > 50);
const find4 = cars.find(car => car.year > 2020);

//      S O R T       //

// sort() method sorts the elements of an array in place and returns the sorted array.
// sort() method does not change the original array.

const sort = ages.sort(function(a, b){
    return a - b;
});
console.log(sort);

//---------------------------------------------------//

const sort2 = cars.sort(function(car1, car2){
    return car1.year - car2.year;    
});
console.log(sort2);

// shorter version of sort using arrow function 
const sort3 = ages.sort((a, b) => a - b);
const sort4 = cars.sort((car1, car2) => car1.year - car2.year);


//      C O M B I N I N G   H I G H   O R D E R   F U N C T I O N S      //

// combine high order functions and arrays to get the desired result

const sorted_by_year = cars.sort(function(car1, car2){
    return car1.year - car2.year;
}).map(function(car){
    return car.name;
});
console.log(sorted_by_year);

// shorter version of combining high order functions using arrow function
const sorted_by_year2 = cars.sort((car1, car2) => car1.year - car2.year).map(car => car.name);
console.log(sorted_by_year2);

// T H A N K   Y O U   F O R   D O I N G   T H I S   W I T H   M E !

 //  F O R K  T H I S   R E P O S I T O R Y   A N D   S U P P O R T   M E   O N   G I T H U B   //


