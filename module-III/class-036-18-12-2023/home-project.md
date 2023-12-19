Based on the project from class 35:

1. In the server - use async/await instead of `readFileSync`/`writeFileSync`
   \*\* Recommendation - do it first with promises then with async/await
2. In the client, remove the forms and use AJAX (`fetch`)
   - First send the request to the server
   - After success manually update the DOM
   - Don't inline the code - use js files from the public folder

Pay attention to:

- Body of requests is now JSON, so you should use the correct middleware from body parser
- In the server - instead of `res.render` and `res.redirect` you should use `res.send` to return JSON or a combination of `res.status` and `res.end`

Bonuses:

1. Show loading state while AJAX is happening
2. Implement optimistic updates (first update DOM, then update server, cancel DOM update if needed)
3. Implement promises
4. Implement coroutine (async/await) - Hint: read about generators
