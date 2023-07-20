# SASS 
<br>

## SASS Variables:

* SASS variables don't compile as CSS variable, rather they compile to their actual value, means
there's a 100% browsers compability 
```css
/* CSS variables:  */
:root {
    --variable_name: [value];
}
```
* We can define SASS variables using _`$`_ ,

> ⚠️ **`NOTE:`** The selector _`:root`_ is **NOT** needed


```scss
$variable_name: [value];
```


* to use defined SASS variable:
```scss
$primary_color: rgb(157, 209, 78);

body {
    background-color: $primary_color; 
}
```
---  
<br>

## Variable Maps:

* SASS has the ability to set a key-value maps of variables, to define a `map`:
```scss
$example_map: (
    "key_name": [value],
    "key_name": [value],
    "key_name": [value]
);

/* example */
$font_weights: (
    "light": 100,
    "normal": 500,
    "heavy": 800
);
```

* To use a value from the variables map, we'll use:

```scss
map-get($map_name, map_key);

/* example */
span {
    font-weight: map-get($font_weights, heavy);
}
```
---
<br>

# SASS Nesting

* One of the most powerfull feature of SASS is **`Nesting`**

* Nesting helps us creating complex styling rules hirarchy  while keeping a maintainable and scalable syntax. 
```scss
/* CSS equivalent */
.card {
    display: inline-block;
}
.card h2 {
    color: red;
}


/* SASS nesting */
.card {
    display: inline-block;

    h2 {
        color: red;
    }
}
```

> ⚠️ **`NOTE:`** It's more efficient using reusable classes when we can, instead of nesting complex hirarchies.
---
<br>

## The  _`&`_ Parent Selector

* The  parent selector  _`&`_ in Sass reffers to the parent selector. It makes it possible to re-use the outer selector in more complex ways, like adding a pseudo-class or adding a selector before the parent.

* SASS automatically adds the parent selector _`&`_ in nested rules.
```scss
// SASS parent selector '&'
.card {
    color: red;

    &:hover { // & equals ".card"
        color: blue;
    }
    // or
    :hover {
        color: blue;
    }
}

// CSS result
.card {
    color: red;
}

.card:hover {
    color: blue;
}
```

> ⚠️ **`NOTE:`** Because the parent selector could be replaced by a type selector like `h1`, it’s only allowed at the beginning of compound selectors where a type selector would also be allowed. For example, `span&` is NOT allowed.
---
<br>

## Interpolation _`#{expression}`_

* Interpolation allows us to inject expression results straight into unquated strings. This way, we can write 

* In most cases, interpolation injects the exact same text that would be used if the expression were used as a property value.

```scss
// SASS interpolation
.main {
    color: red;

    #{&}__description {
        color: blue;

        &:hover {
            color: green;
        }
    }
}

// CSS Result:
.main {
    color: red;
}

.main .main__description {
    color: blue
}

.main .main__description:hover {
    color: green;
}
```

> ⚠️ **`NOTE:`** Interpolation in SASS expressions always returns an unquoted string, no matter whether the string is quoted or not.

> ⚠️ **`NOTE:`** It’s almost always a bad idea to use interpolation with numbers. Interpolation returns unquoted strings that can’t be used for any further math, and it avoids Sass’s built-in safeguards to ensure that units are used correctly.

---
<br>

# SASS `@import` and `@use`
## `@import`

* Just like CSS, Sass also supports the `@import` directive.
* The @import directive allows you to include the content of one file in another.

> ⚠️ **`NOTE:`** The CSS @import directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it. However, the Sass @import directive includes the file in the CSS; so no extra HTTP call is required at runtime!

```scss

@import filename;

```
> ⚠️ **`NOTE:`** You do not need to specify a file extension, Sass automatically assumes that you mean a .sass or .scss file. You can also import CSS files. The @import directive imports the file and any variables or mixins defined in the imported file can then be used in the main file.

## `@use`

*  The new `@use` is similar to` @import` . but has some notable differences: **The file is only imported once**, no matter how many times you @use it in a project. 

```scss
@use 'buttons';
```
* Variables, mixins, and functions (what Sass calls “members”) that start with an underscore ( _ ) or hyphen ( - ) are considered `private`, and not imported

* Members from the used file (buttons.scss in this case) are only made available locally, but not passed along to future imports.

* Similarly, `@extends` will only apply up the chain; extending selectors in imported files, but not extending files that import this one.

* All imported members are `namespaced` by default.

---
<br>

# Partials

* You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. 
* A partial is a Sass file named with a leading underscore. You might name it something like 

> `_`partial-filename`.scss`


* The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. 

* Sass partials are used with the `@use` rule.

> SASS Partial file `_colors.scss` for example :
>> ```scss 
>>    $myPink: #EE82EE;
>>    $myBlue: #4169E1;
>>    $myGreen: #8FBC8F;
>>```
> We import the partial using the `@use` rule:
>>
>>```scss
>>@use "colors";
>>``` <br>
>_______________


---
<br>

# SASS @Functions

*

---
<br>

# SASS @Mixins

*

> ⚠️ **`NOTE:`** Functions should be used to compute values and returns values, and mixins should define styles.

> ⚠️ **`NOTE:`** Functions will only return a single value (in any object type supported in Sass; numbers, strings, colors, booleans, lists, and maps) mixins are able to process logic and output CSS rule with attributes and values.


<br>

# SASS @IF statement

*