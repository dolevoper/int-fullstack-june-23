1. In the server - use async/await instead of `readFileSync`/`writeFileSync`
   \*\* Recommendation - do it first with promises then with async/await
2. In the client, remove the forms and use AJAX (`fetch`)
   - First send the request to the server
   - After success manually update the DOM
   - Don't inline the code - use js files from the public folder

Bonuses:

1. Show loading state while AJAX is happening
2. Implement optimistic updates (first update DOM, then update server, cancel DOM update if needed)
3. Implement promises
4. Implement coroutine (async/await) - Hint: read about generators
