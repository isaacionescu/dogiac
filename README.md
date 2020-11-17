# 🐶 Dogiac

This is a simple project, and my first finished page as part of my self-training in front-end development.

The concept is easy: you have 12 buttons, each representing a zodiac sign. You choose one and, in return, you get a nice little text describing what "doggo" you would be according to your star sign. Kind of like a Buzzfeed quiz.

The landing page has top part (.header), followed by some introductory text (.container) and a section (.table) with the 12 zodiac buttons. Each zodiac button is a "div" that also has a "data-id" property ranging from 1 to 12.
The connections for each zodiac sign are not assigned manually, but with the help of logic and modules.
I have two separate modules:

• script.js = main file;

• zodiac.js = my dog "database"

The zodiac.js database is where I created two objects: the first object is holding the main dog information within 12 entries, one for each dog. Each entry has an ID (1), a zodiac sign (Aries), a corresponding dog breed (Husky) and the dates for that particular sign (March 21 - April 19).
The second object is holding the larger text paragraphs where the doggo's qualities are described. This object also has 12 entries, each one identifiable by ID number.

The script.js file holds the main engine for my code. Here, the zodiac.js is first imported, so I can use that dog information locally.
Then, the rest of the file is just a class called App() and invoked at the very end. Inside this class, I associated several external variables and document selectors to corresponding local "this" objects.
Then, I am invoking event listeners for mouse click and mouse movements. For each of them I have some associated behavior:

Mouse movements ("mouseover" and "mouseout") determine how the buttons react: they change size and opacity smoothly, with a little transition.
Mouse clicks ("click") are first checking to see if they're made on any of the buttons. If a mouse click is done on a button, this triggers other behaviors: it hides both the .table and .container elements, leaving the page blank apart from the main Dogiac logo. Furthermore, it checks which button was just clicked, then retrieves the "data-id" property from that particular HTML element, and then feeds it back into the previous function. The previous function then assigns this retrieved number ID to a new variable, and then invokes a third function, passing that variable as an argument. This third function accesses all the data associated with the ID from the imported zodiac database. Finally, the function fades away all content on the page, deletes it, and replaces it with the final paragraph, where your dog, sign and the rest of the info is generated dynamically.

For re-starting "the game", for now, please click on the main logo. With time, I will improve and add more features to the site.
