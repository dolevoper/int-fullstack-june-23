Implement a simple server with express - show basic HTML and a count of how many times the page was visited (the count should be saved in the server).
It's okay that the counter reset when the server restarts.

Implement the following server:

- The server has a users array
- A user has: id, first name, last name and optionally a phone number
- GET / - show a list of all the user ids (HTML)
- GET /:userId - show the details of the selected user (HTML)
- Handle user not found

Add to the server from the previous level:

- POST /:userId
  1. Take the other details of the user from the body (use body-parser)
  2. Add a user with all the provided details to the array
  3. show a list of all the user ids (HTML)
  - make sure userId is unique
  - make sure all the required details are provided

Extra challanges:

- GET / - the user ids should be links to get the specific user details
- Persist the user list in a file
- Implement all the other operations from the previous project
