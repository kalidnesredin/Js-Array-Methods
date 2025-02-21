# JavaScript High Order Functions and Arrays

## Overview
This repository demonstrates the use of **high-order functions** in JavaScript, including `map`, `filter`, `reduce`, `sort`, `forEach`, and `find`. High-order functions are functions that take other functions as arguments or return functions as their results. They help make code more concise and readable.

### Recommended Resource
For a deeper understanding, check out this [Traversy Media YouTube video](https://www.youtube.com/watch?v=rRgD1yVwIvE&t=0s).

## Data Used
The following arrays will be used to demonstrate high-order functions in JavaScript:

```js
const cars = [
    {name: "Toyota", model: "Hilux", year: 2023},
    {name: "Dodge", model: "Hellcat", year: 2018},
    {name: "Porsche", model: "911", year: 2024},
    {name: "BMW", model: "M3", year: 2016},
    {name: "Toyota", model: "Supra", year: 2016},
    {name: "FAW", model: "Betsu", year: 2023},
    {name: "Nissan", model: "GTR", year: 2016},
];

const ages = [11, 12, 13, 14, 21, 55, 66, 77, 88, 99, 100];
```

## High-Order Functions Demonstrated

### 1. `forEach()`
Iterates over an array and executes a function on each element.

```js
cars.forEach(car => console.log(car.name));
```

### 2. `map()`
Creates a new array populated with the results of calling a provided function on every element.

```js
const carNames = cars.map(car => car.name);
console.log(carNames);
```

### 3. `filter()`
Creates a new array with elements that pass a specified test.

```js
const oldCars = cars.filter(car => car.year < 2020);
console.log(oldCars);
```

### 4. `reduce()`
Reduces an array to a single value by applying a function.

```js
const totalYears = cars.reduce((total, car) => total + car.year, 0);
console.log(totalYears);
```

### 5. `find()`
Returns the first element in the array that satisfies a condition.

```js
const firstOldCar = cars.find(car => car.year < 2020);
console.log(firstOldCar);
```

### 6. `sort()`
Sorts the elements of an array based on a condition.

```js
const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log(sortedCars);
```

## Combining High-Order Functions

You can chain high-order functions to process data efficiently.

```js
const sortedCarNames = cars.sort((a, b) => a.year - b.year).map(car => car.name);
console.log(sortedCarNames);
```

## Contributing
Feel free to fork this repository and contribute!

## Support
If you found this helpful, consider supporting me by starring this repository on GitHub.

---

### Thank You for Exploring JavaScript High-Order Functions With Me!

