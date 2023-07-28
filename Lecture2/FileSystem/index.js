const fs = require("fs");
const path = require("path");

// const data = "Hello from FILE-SYSTEM";

// fs.writeFile(
//   "data.txt",
//   data,
//   {
//     encoding: "utf-8",
//     flag: "w",
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("File Written Successfully");
//   }
// );

// fs.readFile('data.txt', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString()); // data is in buffer format, so we have used toString() fun
// })

// fs.readFile("data.txt", { encoding: "utf-8", flag: "r" }, (err, data) => {
//   if (err) throw err;
//   console.log(data); // Here you don't have to use toString() fun
// });

// fs.readFile("data.txt", { encoding: "utf-8", flag: "r" }, (err, data) => {
//   if (err) throw err;
//   data += "This is the appended text";
//   fs.writeFile(
//     "data.txt",
//     data,
//     {
//       encoding: "utf-8",
//       flag: "w",
//     },
//     (err) => {
//       if (err) throw err;
//       console.log("File Written Successfully");
//     }
//   );
// });

// Now i want to read file that is inside files folder. What we can do in this case is to use Patb module

// console.log(path.join('animals','cat')); // o/p -> animals/cat
// console.log(process.cwd()); // o/p -> D:\Coding Blocks\NodeJS\Lecture2\FileSystem
// console.log(__dirname); // o/p -> D:\Coding Blocks\NodeJS\Lecture2\FileSystem

// now suppose if i get out from my directory and run node FileSystem/index.js
// Process.cwd() => D:\Coding Blocks\NodeJS\Lecture2
// __dirname => D:\Coding Blocks\NodeJS\Lecture2\FileSystem (will give path of folder in which index.js present and it will always same)

// So you can see the diff b/w process.cwd() and __dirname

const F1 = path.join(__dirname, "files", "xyz.txt");
console.log(F1);

fs.readFile(F1, {encoding:'utf-8', flag:'r'}, (err, data)=>{
    if(err) throw err;
    console.log(data);
})