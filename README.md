# Assignment

You're taking over a partially implemented application. Our users have reported bugs and some feature requests, and you're now the lead for this project.

## 🧰 Requirements

- Node.js >= v.16

## 🏎 How to start

1. Start by installing the dependencies with: `$ npm install`.
2. Start the application by running: `$ npm start`.

## 📖 Before starting with the tasks

First of all, look around in the project and get familiar with the code. You're totally free to change the existing code inside `/src` (we really encourage it) but you won't need to change anything inside `/server`.

Inside the server, you'll find the backend server with serves the data. It has the following endpoints:

- `GET /all` returns all pokemons.
- `GET /favorite` return all favorite pokemons.
- `POST /favorite/:name` adds a pokemon to the favorites.
- `DELETE /favorite/:name` removes a pokemon from the favorites.

\*\* **NOTE: You won't need to do any changes in the `/server` directory, you'll only work within the `/src`.** \*\*

## 📋 Tickets:

### **TICKET-01 (Bug):** Nothing happens when a User presses "Add to favorite".

A user called support to inform that nothing happens when they press "Add to favorite". Can you please look at if this can be fixed?

### **TICKET-02 (Feature):** As a user I want to be able to filter by favorites.

We would like to have a button which filters the list and only shows my favorited pokemons when clicked.

### **TICKET-03 (Potential bug):** QA says if they double-click on "Add to favorite" it doesn't really work well.

If you double-click the "Add to favorite" button, an unexpected behavior happens. Can we improve this part so that we don't get any errors and that the UX feels good?
