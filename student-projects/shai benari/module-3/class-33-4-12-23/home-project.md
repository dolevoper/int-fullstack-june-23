# User management app

Create a simple user management app.

## Requirements

1. Each user should have an id, first name, last name and a phone number
2. The user id should be unique
3. Except for the user's phone, all the details are required
4. The users should be persisted to a JSON file
5. Operations:
   - List - show a list of all the user ids
   - Read - given a user id, show the user's full information
   - Create - given all the details of a user, create a new user (without breaking any constraints)
   - Update - given a user id and partial user details, update all the given details for the user with the given id (do not update the user id)
   - Delete - given a user id, delete the user from the system

## Interface

The goal is to implement an interactive command line interface (CLI). Look into node's `readline` library.

It's possible to first implement a non-interactive CLI (use arguments to the program to execute operations) and transition to an interactive CLI later.

## Extra credit

Implement a search operation. There are many possible variations, choose the one most appealing to you (doesn't have to be from this list):

- Given a field and a string, list all the ids of users that:
  - The data saved in the given field starts with the given string (field: first name, string: da, should return users with names like "dan", "dani", "daniel", "danielle", etc)
  - The data saved in the given field contains the given string (field: first name, string: er, should return users with names like "omer", "eran", "avner", etc)
  - The data saved in the given field matches a regex of the given string
- All the above variations could be done by searching in any field
