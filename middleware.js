const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Provide Age");
  } else if (req.query.age < 18) {
    resp.send("Age Should Be greter 18");
  } else {
    next();
  }
};

module.exports = reqFilter;
