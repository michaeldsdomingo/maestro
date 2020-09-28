## Description

Michael Domingo's Hiring Challenge (Backend) 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start


```

Use Postman to login, and Get, Add, Update, and Delete your contact lists. 
IMPORTANT: Once you login, copy and paste the token into the headers with a key value pair of "x-access-token={token}"

Description: Landing Page
GET "http://localhost:3000"
Response: "Welcome To Michael Domingo's App. Here you can log in to Get, Add, Update, and Delete Contacts"

Description: Login
POST "http://localhost:3000/auth/login"
Response: {isSuccessful: true, token: encrypted-token-string}

Description: Get All Contacts
GET "http://localhost:3000/contacts"
Response: {data: [{id: 1, name: "Bob Hope"}, {id: 2, name: "George Washington"}]}

Description: Create a Contact
POST "http://localhost:3000/contacts"
Body (JSON): {name: "Ross Geller"}
Response: {isSuccessful: true, id: 3}

Description: Update a Contact
PUT "http://localhost:3000/contacts"
Body (JSON): {id: 2, name: "Phoebe Buffet"}
Response: {isSuccessful: true}

Description: Delete a Contact
DELETE "http://localhost:3000/contacts/:id"
Response: {isSuccessful: true}