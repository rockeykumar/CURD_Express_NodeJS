const express = require("express");
const app = express();
const PORT = 8000;
const urls = require('./routers/urls');
require("./db/conn");

// app.use(express.json());
const bodyParser = require("body-parser");

app.use("/", express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname+"./public"));
app.use(urls);

// console.log(path.join(__dirname,'./public'));

app.listen(PORT, () =>
  console.log("Server running at http://localhost:" + PORT)
);

// const Storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: (req, file, cb) => {
//     let fileName = file.originalname;
//     let index = fileName.indexOf(".");
//     fileName = fileName.substring(0, index)
    
//     fileName = fileName+"_"+Date.now()+path.extname(file.originalname);
//     // console.log(fileName);
//     cb(null, fileName);
//   }
// });

// const uploadMiddleware = multer({
//   storage: Storage
// }).single('profileImage');

// // const uploadMiddleware = multer({
// //   storage: Storage
// // }).single('avatar');

// app.post("/upload", uploadMiddleware,  (req, res) => {
//   let fileName = req.file.filename;
//   let success = req.file.filename + " uploaded successfully...!";
//   console.log(fileName);
//   res.render("upload-file", {success});
// });

// app.get("/upload", (req, res) => {
  
//   res.render("upload-file", {success:""});
// });

// // ------------ image upload end -------------

// app.get("/", async (req, res) => {
//   let result = await getData();
//   // console.log(result);
//   // res.send(result);
//   res.render("index", { records: result });
// });

// app.post("/", uploadMiddleware, async (req, res) => {
//   let name = req.body.name;
//   let roll = req.body.roll;
//   let mobile = req.body.mobile;
//   let address = req.body.address;
//   let profileImage = req.file.filename;

//   const userData = {name, roll, mobile, address, profileImage};

//   if (name.length === 0 || roll.length === 0 || mobile.length === 0 || address.length === 0)
//     res.redirect("/");

//   const response = await insertData(userData);
//   console.log(response);
//   res.redirect("/");
// });

// app.post("/search", async  (req, res) => {
//     let result = await filter(req.body);
//     if(result === 0)
//       res.redirect('/');

//     res.render("index", { records: result });
// });
  
// app.get("/delete/:id", (req, res) => {
//   deleteRecord(req.params.id);
//   res.redirect('/');
// });

// app.get("/updateRecord/:roll", async (req, res) => {
  
//   let searchname = "";
//   let searchroll = req.params.roll;
//   let searchmobile = "";
//   let updateData = {searchname, searchroll, searchmobile};

//   let result = await filter(updateData);
//   // console.log(result);
//   res.render("updateRecord", { records: result });
// });

// app.post("/updateRecord", async (req, res) => {
//   updateRecord(req.body);
//   // let result = await getData();
//   // res.render("index", { records: result });
//   res.redirect("/");
// });





// app.listen(PORT, () =>
//   console.log("Server running at http://localhost:" + PORT)
// );
