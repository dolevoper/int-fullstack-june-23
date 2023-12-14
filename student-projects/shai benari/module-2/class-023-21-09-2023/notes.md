compile hero destination folder config:  
`compile-hero.typescript-output-directory`

style guide was updated!

balloons animation with custom property:
https://codepen.io/dolevoper/pen/qBLXQME?editors=0010

forms:

1. I couldn't find a case where e.target is not an HTMLFormElement
2. document.querySelector("...") as HTMLFormElement | null is not needed
3. named forms and named form controls:

```html
<form name="login">
  <input name="username" />
</form>
```

```javascript
document.forms.login.elements.username;
```

```typescript
document.forms.namedItem("login")?.elements.namedItem("username");
```

also, check if they know about:

```html
<div id="foo"></div>
<script>
  document.foo.innerText = "hello";
</script>
```
