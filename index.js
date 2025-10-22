const express = require('express')
const app = express();
const PORT =8000;

//since this is not connected to DB, create an array of books 
const books=[
    {id: 1, title:'Book One' ,author:'Author one'},
    {id: 2, title:'Book two' ,author:'Author two'}
]

//middleware for converting json input into javascript object
app.use(express.json())

//get book from list of books
app.get('/books',(req,res)=>{
    res.json(books)
})
app.get('/books/:id', (req,res)=>{
    const id=req.params.id
    const book=books.find((e)=>e.id==id)
    if(!book) return res.status(404).json({error:`Book with id ${id} doesnt exists`})
  return res.json(book)
})

//post a new book
app.post('/books',(req,res)=>{
const {title, author}=req.body
if(!title || title==='')
    return res.status(400).json({error:'title is requird'})
if(!author || author==='')
    return res.status(400).json({error:'author is requird'})
const id=books.length+1
const book={id,title,author}
books.push(book)
    return res.status(201).json({message:'book created successfully...',id})
})


//delete a book
app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const indexToDelete=books.findIndex(e=>e.id===id)
    if (indexToDelete === -1) {
    return res.status(404).json({ error: `Book with id ${id} not found` })
  }
    books.splice(indexToDelete,1)
    return res.status(200).json({message:'book deleted..'})
})

//server listening on port 8000 performing send,get,etc tasks
app.listen(PORT,()=>console.log(`HTTP server is running on port ${PORT}`));