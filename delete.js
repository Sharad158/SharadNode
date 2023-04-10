const dbConnect = require('./database');

// dbConnect().then((resp) => {
//     resp.deleteOne({name:"Sharad"}).then((res) => {
//         if(res.deletedCount > 0) {
//             console.log("Data Deleted Successfully !!!");
//         }
//     })
// });
const deleteData = async () => {
    let res = await dbConnect();
    let data = await res.deleteOne({name:"Sharad"});
    if(data.deletedCount > 0) {
        console.log("Data Deleted Successfully !!!");
    }
}

deleteData();
