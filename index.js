// const app = require('./app.js');

// console.log(app.z);

// ==========================================================
// const arr = [2,4,5,6,7,8,9,3,5,7,8];

// let result = arr.filter((item) => {
//              return item === 8;
//           });

// console.log(result);

//============================================================

const { Console } = require("console");
const http = require("http");

//  function datacontrol(req,resp){
//     resp.write("Hello SP");
//     resp.end();
//  }

// http.createServer((req,resp) => {
//     resp.write("Hello SP 12345");
//     resp.end();
// }).listen(4000);

// let datacontrol = (req,resp) => {
//     resp.write("Hello SP arrow");
//     resp.end();
// }
//  http.createServer(datacontrol).listen(4500);

// http.createServer((req,resp) => {
//     resp.write("Hello SP anonymous");
//     resp.end();
// }).listen(4500)

// ==============================================================================================

// console.log("Hello 123dsd");

// ==============================================================================================
// ====================================== Basic Api =============================================
// const data = require('./data');

// http.createServer((req,resp) => {
//     resp.writeHead(200,{'content-type' : 'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// =================================== 12.Input From Command Line ==============================
// console.log(process.argv["2"]);
// const fs = require("fs");

// const input = process.argv;

// // fs.writeFileSync(input["2"], input["3"]);
// // fs.unlinkSync(input["2"]);

// if (input["2"] == "add") {
//   fs.writeFileSync(input["3"], input["4"]); // Create File & Write
// } else if (input["2"] == "remove") {
//   fs.unlinkSync(input["3"]); // Delete File
// } else {
//   console.log("Invalid Input");
// }
// ================================ 13. Show Files List =======================================

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files"); // upto files folder path
// // console.log(dirPath);
// for (i = 0; i < 2; i++) {
//   fs.writeFileSync(dirPath + "/Hello_" + i + ".txt", "Hello world"); //Make files in dirPath
// }

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log(item); //List file Path
//   });
// });

// ================================ 14. CRUD File Asyncronus ========================================

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filepath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filepath, "this is apple.");

// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filepath, " it is sweet", (err) => {
//   if (!err) console.log("file updated");
// });

// fs.rename(filepath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

// fs.unlinkSync(`${dirPath}/fruit.txt`);
// ========================================== 15V. Asyncronous Lamguage =========================
// console.log("start run");

// setTimeout(() => {
//   console.log("logic");
// }, 2000);

// console.log("end");

// DrawBack

// let a = 10;
// let b = 20;

// setTimeout(() => {
//   b = 30;
// }, 2000);

// console.log(a + b);

// Handle DrawBack

// let a = 10;
// let b = 20;

// let waitingdata = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });

// waitingdata.then((data) => {
//   console.log(a + data);
// });


// ========================================= 18V Express JS ====================================================================

// const express = require('express');

// const app = express();

// app.get('',(req,resp)=>{
//     resp.send("My Name Is " + req.query.name);
// });

// app.listen(5000);

//======================================20V. Render Html & Json data =========================
// const express = require('express');

// const app = express();

// app.get('',(req,resp)=>{
//     // Html Render
//     resp.send(`<input type="text" name="first_name" placeholder="Please Enter First Name" value="${req.query.name}">`);  

    //Json 
    // resp.send([
    //     {
    //     "name":"Sharad",
    //     "mobile":"323435454"
    //     },
    //     {
    //     "name":"Sharad",
    //     "mobile":"323435454"
    //     },
    //     ]
    // );
// });

// app.listen(3000);

// ========================================= 21V. Make HTML Pages =========================================================
// const express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname,'public');

// // console.log(__dirname);
// // console.log(publicPath);

// app.use(express.static(publicPath));

// app.listen(3000);

// ============================================= 22v. Remove Extension & 404 Page ===========================================

// const express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname,'public');

// app.get('/about',(req,resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get('/',(req,resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// });

// // If no route define then use below
// app.get('*',(req,resp) => {
//     resp.sendFile(`${publicPath}/404.html`);
// });

// app.listen(3000);