A simple RESTful API built using Node.js and Express.js that performs basic CRUD (Create, Read, Delete) operations on a list of books.This project demonstrates how to handle routes, use middleware, and manage JSON data without a database.


🚀 Features:-
  -Get all books from the collection
  -Get a single book by its ID
  -Add (POST) a new book
  -Delete a book by ID
  -Handles missing or invalid data gracefully
  -Uses Express middleware to parse JSON inputs


  🛠️ Tech Stack:-
  
Node.js – JavaScript runtime environment

Express.js – Framework for building APIs




📡 API Endpoints:-

GET /books
→ Returns a list of all books.

GET /books/:id
→ Returns a specific book by ID.

POST /books
→ Create a new book and add to the booklist

DELETE /books/:id
→ Deletes the book with the given ID.


💡 Note:
      This project doesn’t use a database — it stores books in a simple JavaScript array.
      When the server restarts, added or deleted books are reset.
