// const app = require('./app.js');

// console.log(app.z); 

// ==========================================================
// const arr = [2,4,5,6,7,8,9,3,5,7,8];

// let result = arr.filter((item) => {
//              return item === 8;
//           });

// console.log(result);

//============================================================

const http = require('http');

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
const data = require('./data');

http.createServer((req,resp) => {
    resp.writeHead(200,{'content-type' : 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);