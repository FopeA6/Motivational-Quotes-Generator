# Lap 1 Debugging Assignment

Welcome to your first debugging assignment!
This repo is riddled with bugs and we need your help to fix it up.
Please make sure that you read the instructions before starting.


## Code of Conduct
- Do not ask your classmates (verbally or through any other communication method) for help.
- Do not copy/paste any code from someone else or from any online resource.


## Tasks
You are going to debug and complete a Random Quotes generator. When you are finished with the app, it should look something like this:

![](mockups/assessment-1-giphy.gif)


### API
- Install the node modules and run your api server.
- Add a route to get all quotes - check your answer in the browser
- Add a route to display a random quote
- Refactor the /quotes/:index route: Add some logic to handle indices that are outside the quotes array range. You should get the following result:

![](mockups/app-routes.gif)

### Frontend
- Edit title and button using CSS and HTML so that it looks like the one in the gif (don't worry about exact colour or font size). Feel free to use external fonts.
- Change the background image and add image credits in the bottom right-hand corner of the page.
- Clean CSS file (ie. if there are repeated or inherited properties and values that are not needed, delete them)
- Debug code in the app.js and script.js so that a random quote is shown every time the button is clicked.

***


# Enjoy! 😁

# Debug Revision
1. Read the README.md folder, understand what is required from you.
2. Server side is API stuff - client really does nothing without the server, so make sure the server works first.
3. npm install should only be ran in the folder that contains the package.json.
4. cd into the folder with package.json - (api-SERVERSIDE).
5. npm install
6. Install relevant packages e.g express, cors, body-parser, nodemon, mocha, chai etc.
7. If installing nodemon, in package.json - under scripts add "start": nodemon app.js
8. Now time to edit the API folder - app.js.
9. First just tidy it up, add const, let etc where it is needed before tackiling tasks, see what is given to you, make the workspace comfortable.
10. Get server runnning first so .listen(port) etc, and check in browser or terminal (curl http://localhost:5000/).
11. (quotes[req.params.index]) - quotes refers to the array, req.params.index - points to what we are requesting, The req.params property is an object containing properties mapped to the named route “parameters”. 
12. Make code more readable, multi-lines etc.
13. res.send(404).end() - The end() methods is used to get the offset after the last character is matched, so in this case after the last array index is reached, and the user tries to reach any beyond that, they will receive a 404 error.
14. Now for clientside.
    15. Read over minor errors in html like syntax, id names etc, just tidy it up.
    16. Only change one thing at a time to check.
    17. r.text is used because text is the content-type of quotes.
