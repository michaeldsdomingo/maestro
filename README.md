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

<h4>Use Postman to login, and Get, Add, Update, and Delete your contact lists.</h4> 
<h5>IMPORTANT: Once you login, copy and paste the token into the headers with a key value pair of "x-access-token={token}"</h5>

<div>Description: Landing Page</div>
<div>GET "http://localhost:3000"</div>
<div>Response: "Welcome To Michael Domingo's App. Here you can log in to Get, Add, Update, and Delete Contacts"
</div>

<div>Description: Login</div>
<div>POST "http://localhost:3000/auth/login"</div>
<div>Response: {isSuccessful: true, token: encrypted-token-string}</div>

<div>Description: Get All Contacts</div>
<div>GET "http://localhost:3000/contacts"</div>
<div>Response: {data: [{id: 1, name: "Bob Hope"}, {id: 2, name: "George Washington"}]}</div>

<div>Description: Create a Contact</div>
<div>POST "http://localhost:3000/contacts"</div>
<div>Body (JSON): {name: "Ross Geller"}</div>
<div>Response: {isSuccessful: true, id: 3}</div>

<div>Description: Update a Contact</div>
<div>PUT "http://localhost:3000/contacts"</div>
<div>Body (JSON): {id: 2, name: "Phoebe Buffet"}</div>
<div>Response: {isSuccessful: true}</div>

<div>Description: Delete a Contact</div>
<div>DELETE "http://localhost:3000/contacts/:id"</div>
<div>Response: {isSuccessful: true}</div>