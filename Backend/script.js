const fs = require('fs');

// fs.writeFile("file.text", "Hello, World!", (err) => {console.log(err? "Error writing file" : "File written successfully")});


// fs.appendFile("file.text", "\nThis is an appended line", (err) => {console.log(err? "Error appending file" : "File appended successfully")});

// fs.rename("file.text","newfile.txt",err=>{console.log(err?"error renaming file" : "File renamed successfully")});

// fs.copyFile("newfile.txt","./copy/copyfile.txt",err=>{console.log(err?"error copying file" : "File copied successfully")});


// fs.unlink("newfile.txt",err=>{console.log(err?"error deleting file" : "File deleted successfully")});

// fs.rmdir("./copy", { recursive: true }, (err) => {console.log(err?"error deleting directory" : "Directory deleted successfully")});


// const http =require("http");

// const server =http.createServer((req, res) => {
//     res.end("Hello, ankit");
// })

// server.listen(3000);
const express = require('express');
const app = express();

const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port  ${port}`);
})