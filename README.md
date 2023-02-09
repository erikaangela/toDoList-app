# ToDo App

A to-do list app using React Redux and [JSON-server](https://github.com/typicode/json-server). Upon log-in with a Google account (using [Sign In With Google](https://developers.google.com/identity/gsi/web/guides/overview) for authentication), allows user to add, edit, and delete a task item.

### Project Goals

* Apply React and Redux. 
* Properly apply use of REST principles.
* Apply router, portals for app flow.
* Responsive.

### How the app works

The header&mdash;containing a home button, title, and Google log-in button&mdash;is shown upon initial load. The user must log-in through Google to access the rest of the app. After logging in through the [Google API](https://developers.google.com/identity/protocols/oauth2), a button to add a task will be shown. 

Each task can then be edited or deleted. Within the editing and deleting functions, the user will automatically be taken back to the homepage displaying the list after the action.

### Technologies Used

* JavaScript
* HTML/CSS
* React JS
* Redux
* APIs&mdash;[Google](https://developers.google.com/identity/protocols/oauth2)

### Remaining Backlog Items

* Further styling for smoother application flow&mdash;CSS theming.
* Add checkboxes for strikethrough.

## Quick Start

* This app requires a Google account to add, edit, and delete items.
* Clone the app onto your local machine and open it.
* Open two terminals within the cloned app. One terminal will be within that root directory, and the other must be within the api folder.
* Run ````npm install```` on both terminals.
* Run ````npm start```` in both terminals. The api folder terminal will run the server, while the root directory terminal will open the app in localhost:3000.
