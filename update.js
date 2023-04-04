const dbConnect = require('./database');

// dbConnect().then((res) => {
//     let data = res.updateMany({name:"Sharad"},{$set:{email:"sharad@mailinator.com"}}).then((resp) => {
//         console.log(resp);
//     });
// })
const updateData = async () => {
    let res = await dbConnect();
    let data = await res.updateMany({name:"Sharad"},{$set:{email:"sharad1@mailinator.com"}});
    console.log(data);
}

updateData();
