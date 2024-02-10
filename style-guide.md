# INT fullstack course June 2023 - Style Guide

## General

1. Use prettier for formatting
2. Always end lines with a semicolon (`;`)
3. No multi assignment
4. Code and strings in English only
5. Always use strict equality checks (`===`, `!==`)
6. Insert empty lines:
   - Before control structures (if, for, while, etc...)
   - After variable definition
   - Before return statement

## Naming

1. All variables, files, folders, (non-constructor) functions and arguments should be named in camelCase
2. All constructors, types, classes and interfaces should be named in PascalCase  
   Examples:

```typescript
// ✅ This is how things should be names in code ✅
const theSpeedOfLight = 299_792_458;
let shouldCancelUpdate = false;

function updatePersonName(personId: string, newName: string) {}

function Person(id: string, name: string) {}

type BloodType = "A" | "B" | "AB" | "O";

interface Car {}

class Truck implements Car {}

// ❌ This is the no-no section ❌
let NumberOfStudents = 27;

function SPLIT_TEXT_TO_LINES(Text: string) {}

const task = {
  title: "...",
  owner: "...",
  "story-points": 3, // ❌❌❌
};
```

3. Boolean variables and functions returning a boolean should start with "is", "can", or "should":
   - `isTallEnoughToRide`, `canSwitchState`, `shouldDisplayResult` ✅
   - `tallEnoughToRide`, `switchState`, `displayResult` ❌
4. No abbreviations
   - `user`, `projectName`, `itemsByItemId` ✅
   - `usr`, `prjName`, `itmsByItmId` ❌

## Variables

1. Use `let` only when value will change - otherwise use `const`. Never use `var`.
2. Use meaningful names
   - `numberOfStudents` ✅
   - `num` ❌
   - `foo` ❌
   - `i` ❌
3. Names should be as meaningful as the variables scope

```typescript
todos.filter((t) => t.active); // ✅

function swap(obj) {
  const temp = obj.a; // ✅

  obj.b = a;
  obj.a = b;
}

function repeat(word: string, times: number) {
  const res = ""; // ✅

  for (let i = 0; i < times; i++) {
    // ✅
    res += word;
  }

  return res;
}
```

4. Don't include the type of the variable in its name (Hungerian notation):
   - `name` ✅
   - `strName` ❌
5. Include units when needed: `delayInMs`, `ageInDays`, `weightInKg`
6. Declare variables as close to usage as possible

## Typings

1. Every project should use the minimal `tsconfig.json` from the repo's root
2. Don't annotate where TypeScript can infer the type:

```typescript
const age = 18; // ✅
const age: number = 18; // ❌

const name = prompt("Please enter your name"); // ✅
const name: string = prompt("Please enter your name"); // ❌

const canEnterTheClub = age >= 18; // ✅
const canEnterTheClub: boolean = age >= 18; // ❌
```

3. Unless declarion merging is needed, use `type` and not `interface`
4. Unless impossible, use type narrowing and not type casting (`as ...`)

## Comments

1. No comments
2. No comments.
3. Seriously, no comments!
4. If you think a comment is needed, please refer to the first rule

## Branching

1. In an if/else if/else control structure, order the blocks by length:

```typescript
// ✅
if (!isBarista) {
  alert("You are not allowed to use the coffee machine.");
} else {
  alert("Grinding beans... 🫘");
  alert("Boiling water... 💧");
  alert("Pouring coffee... ☕");
  alert("Adding milk... 🐄");
  alert("Enjoy your coffee! 🍵");
}

// ❌
if (isBarista) {
  alert("Grinding beans... 🫘");
  alert("Boiling water... 💧");
  alert("Pouring coffee... ☕");
  alert("Adding milk... 🐄");
  alert("Enjoy your coffee! 🍵");
} else {
  alert("You are not allowed to use the coffee machine.");
}
```

2. Prefer a ternary + `const` variable over an if/else + `let` variable:

```typescript
const ageGroup = age > 17 ? "Adult" : "Minor"; // ✅

// ❌
let ageGroup: string;
if (age > 17) {
  ageGroup = "Adult";
} else {
  ageGroup = "Minor";
}
```

3. Prefer early `return`s over `else` blocks:

```typescript
// ✅
function getPriceForCart(user, product) {
  const sale = currentSales.find((sale) => sale.productId === product.id);

  if (sale) {
    return product.price * (1 - sale.discount);
  }

  if (user.membershipType === membershiptTypePremium) {
    return product.price * 0.95;
  }

  return product.price;
}

// ❌
function getPriceForCart(user, product) {
  let price = product.price;

  const sale = currentSales.find((sale) => sale.productId === product.id);
  if (sale) {
    price *= 1 - sale.discount;
  } else if (user.membershipType === membershiptTypePremium) {
    price *= 0.95;
  }

  return price;
}
```
