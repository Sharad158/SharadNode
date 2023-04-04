const dbConnect = require('./database');
// 1. Promise Handle Using then 
// dbConnect().then((resp) => {
//     resp.find().toArray().then((res) => {
//         console.log(res);
//     });
// });

// 2. Promise Handle Using async & await

const main = async () => {
    let data = await dbConnect();
    let res = await data.find().toArray();
    console.log(res);
}
main();