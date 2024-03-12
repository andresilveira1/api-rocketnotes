<h1 align="center">RocketNotes Backend</h1>

A Rest API build with Node.js and Express. On this API you can create a account and have a place to save your personal notes.

### FronEnd repository: [Link](https://github.com/andresilveira1/rocketnotes-web)

## Technologies

- Node.js
- Express
- SQLite
- Knex
- Cors
- JWT

## Requisites

- [Node.js](https://nodejs.org/en)

## Setup

- Clone the repository;
- Install dependencies (`npm install`)
- Run application (`npm run dev`)

<br>

# <p align="center">HTTP</p>

## <p align="center">User</p>

### POST`/users`

Create a new user.

#### Request body

```json
{
  "name": "username",
  "email": "useremail@email.com",
  "password": "123456"
}
```

### PUT`/users`

Update user. ID will be taken from token via request.

#### Request body

```json
{
  "name": "username",
  "email": "useremail@email.com",
  "old_password": "123456",
  "password": "123"
}
```

### PATCH`/users/avatar`

Upload or Update avatar. ID will be taken from token via request. Avatar filename will be taken from request and saved on database.

#### Authentication: `/sessions`

```json
{
  "email": "useremail@email.com",
  "password": "123456"
}
```

## <p align="center">Notes</p>

### POST`/notes`

Create a note. User ID will be taken from token via request.

```json
{
  "title": "Introduction to Nodejs",
  "description": "This is a example.",
  "tags": ["node", "express"],
  "links": ["link1", "link2"]
}
```

### GET`/notes?`

Get a note by title or tag. User ID will be taken from token via request.

```http
user_id=1&title=xxx&tags=xxx
```

### GET`/notes/:id`

Show all notes. User ID will be taken from token via reuqest.

### DELETE`/notes/:id`

Delete a note. User ID will be taken from token via request.

## <p align="center">Tags</p>

### GET`/tags`

List all tags. User ID will be taken from token via request to get all tags.

<br>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
