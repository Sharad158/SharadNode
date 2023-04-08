const dbConnect = require("./database");

const deleteData = async (req, resp) => {
  let data = await dbConnect();
  let res = await data.deleteMany({ name: "Sharad2" });
  console.log(res);
  if (res.deletedCount > 0) {
    console.log("Data Deleted Successfully");
  }
};

deleteData();
