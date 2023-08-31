# Parsley Game

Those are the building stone mechanics for our parsley games:

## Game Loop

Instead of running between endless functions, we'll have a gameloop that each loop will present the current scene.

## Actions

An action is a verb that the player can command the game to do. Each action must have a result, either a valid one or not.
The player will be able to ask to do an action on an object (static/active), character or an exit

### Scene

Each scene can be considered as a room, each room will have it's own description, interactable objects and available exists.
Saving a scene/room as an object will give us the ability to normalize general activities and actions.

Each scene will contain:

1. Name
2. Description - long and short.
3. Description - long and short.
4. Is discovered?
5. Objects:
   1. Interactable objects
   2. Exists

### Interactable Objects

There will be several interactable objects along the game. Some objects will be Characters, static map objects (like a tree or a pond), active game objects (like a fishing pole, rose etc.) or Exits.

#### Characters

A character represents an object you can have a dialog with, and may personally respond to your questions, like a princess or a goblin.

Each character will contain:

1. Name
2. Description
3. Actions
4. Dialog Lines

##### Dialog line

A dialog line is a text describing the character's opinion on an object. Each dialog line consists of:

1. Target - Representing the target the text is referring to
2. Text - The actual text.
