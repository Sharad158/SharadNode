const dbConnect = require('./database');

const main = async () => {
    let data = await dbConnect();
    let res = await data.find().toArray();
    console.log(res);
}
main();