# INT fullstack course June 2023 - Style Guide

## General

1. Use prettier for formatting
2. Always end lines with a semicolon (`;`)
3. No multi assignment
4. Code and strings in English only
5. Always use strict equality checks (`===`, `!==`)

## Variables

1. Always use `const`
2. All variables should be named in camelCase:
   - `theSpeedOfLight` ✅
   - `TheSpeedOfLight` ❌ (pascal case)
   - `THE_SPEED_OF_LIGHT` ❌ (snake case)
3. Use meaningful names
   - `numberOfStudents` ✅
   - `num` ❌
   - `foo` ❌
   - `i` ❌
4. No abbreviations
   - `user`, `projectName`, `itemsByItemId` ✅
   - `usr`, `prjName`, `itmsByItmId` ❌
5. Don't include the type of the variable in its name (Hungerian notation):
   - `name` ✅
   - `strName` ❌
6. Boolean variables should start with "is", "can", or "should":
   - `isTallEnoughToRide`, `canSwitchState`, `shouldDisplayResult` ✅
   - `tallEnoughToRide`, `switchState`, `displayResult` ❌
7. Include units when needed: `delayInMs`, `ageInDays`, `weightInKg`

## Typings

1. Don't annotate where TypeScript can infer the type:

```typescript
const age = 18; // ✅
const age: number = 18; // ❌

const name = prompt("Please enter your name"); // ✅
const name: string = prompt("Please enter your name"); // ❌

const canEnterTheClub = age >= 18; // ✅
const canEnterTheClub: boolean = age >= 18; // ❌
```

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
