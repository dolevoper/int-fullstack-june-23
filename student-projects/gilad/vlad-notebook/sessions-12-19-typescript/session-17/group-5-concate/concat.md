# Concat Function

Concat adds arrays to arrays.

```js
const cities = ["Dimona", "Be'er Sheva", "Haifa"];
const states = ["Arizona", "California", "New York"];

const shagrirutList = cities.concat(states);

alert(shagrirutList); // ["Dimona", "Be'er Sheva", "Haifa", "Arizona", "California", "New York"]
```

```js
const firstArray = [];
const secondArray = [1, 2, 3];

const concatenatedArray = firstArray.concat(1, secondArray);

alert(concatenatedArray); // [1,1,2,3]
```

```js
const colors = ["blue", "red", "green"];

const pixels = colors.concat();

alert(pixels); // ["blue", "red", "green"]
```
