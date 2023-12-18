const { connectDb } = require("../database");

const insertContact = async (req, res) => {
  const db = await connectDb();
  var myobj = {
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    message: req.body.message
  };

  const contacts = await db.collection("contacts").insertOne(myobj,function(err, res) {
    if (err) throw err;
    //console.log("1 contact inserted");
    db.close();
  });
  res.json("contact "+req.body.name+" inserted");0
  
};
const readContact = async (req, res) => {
  const db = await connectDb();
  const books = await db.collection("contacts").find().toArray();

  res.json(books);
}
const deleteContact = async (req, res) => {
  const db = await connectDb();
  var myquery = { name: req.body.name };
  //console.log(req.body.name);
  db.collection("contacts").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    //console.log(obj.result.n + " contact(s) deleted");
    db.close();
  });
  res.json("contact "+req.body.name+" deleted");
}
const updateContact = async (req, res) => {
  const db = await connectDb();
  var myquery = { name: req.body.name };
  //console.log(req.body);
  var newvalues = { $set: {
    lastName: req.body.lastName,
    password: req.body.password,
    message: req.body.message 
  } };
  db.collection("contacts").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    //console.log("1 contact updated");
    db.close();
  });
  res.json("contact "+req.body.name+" updated");
}

module.exports = {
  insertContact,
  readContact,
  deleteContact,
  updateContact
};
