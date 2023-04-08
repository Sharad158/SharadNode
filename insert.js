const dbConnect = require('./database');

const insert = async () => {
    let data = await dbConnect();

    let res = await data.insertMany([
        {name : "Sharad", email:"sp@123.gmail.com"},
        {name : "Sharad1", email:"sp1@123.gmail.com"},
        {name : "Sharad2", email:"sp2@123.gmail.com"}
    ]);
    if(res.acknowledged) {
        console.log("Data inserted successfully");
    }
}

insert();