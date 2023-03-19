const express = require("express");
const app = express();

// =============================  25V  i)Application Level Middleware ==============
// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("404 Not Found");
//   } else if (req.query.age < 18) {
//     resp.send("404 Not Found");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter); // Application Level Middleware

// app.get("/", (req, resp) => {
//   resp.send("Home Page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("User Page");
// });

// app.listen(3000);
// ======================= 25. ii)Router Level Middleware   =====================

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please Provide Age");
//   } else if (req.query.age < 18) {
//     resp.send("Age Should Be greter 18");
//   } else {
//     next();
//   }
// };

// app.get("/", reqFilter, (req, resp) => {
//   resp.send("Home Page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("User Page");
// });

// app.listen(3000);
// ======================= 25. iii)Onother File Middleware   =====================
// const reqFilter = require("./middleware");

// app.get("/", reqFilter, (req, resp) => {
//   resp.send("Home Page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("User Page");
// });

// app.listen(3000);

// ======================= 25. iii)Group Level Middleware   =====================
const reqFilter = require("./middleware");

const route = express.Router();
route.use(reqFilter);

route.get("/", (req, resp) => {
  resp.send("Home Page");
});

route.get("/users", (req, resp) => {
  resp.send("User Page");
});

app.use("/", route);

app.get("*", (req, resp) => {
  resp.send("404 Page");
});

app.listen(3000);
