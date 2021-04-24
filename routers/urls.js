const express = require('express');
const router = new express.Router();
const multer = require('multer');
const path = require('path');

const insertData = require("../DAO/insertData");
const getData = require('../DAO/getData')
const filter = require("../DAO/filter");
const deleteRecord = require("../DAO/deleteRecord");
const updateRecord = require("../DAO/updateRecord");



// image upload method ------ start --------------- 
const Storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
      let fileName = file.originalname;
      let index = fileName.indexOf(".");
      fileName = fileName.substring(0, index)
      
      fileName = fileName+"_"+Date.now()+path.extname(file.originalname);

      cb(null, fileName);
    }
});
  
const uploadMiddleware = multer({
    storage: Storage
}).single('profileImage');
  
// image upload method ------ end --------------- 

router.get("/", async (req, res) => {

    let result = await getData();
    res.render("index", { records: result });

});
  
router.post("/", uploadMiddleware, async (req, res) => {
    const url = "http://localhost:8000/";
    let name = req.body.name;
    let roll = req.body.roll;
    let mobile = req.body.mobile;
    let address = req.body.address;
    
    let profileImage = url + path.join('uploads', req.file.filename).replace(/\\/g, '/');
  
    const userData = {name, roll, mobile, address, profileImage};
  
    if (name.length === 0 || roll.length === 0 || mobile.length === 0 || address.length === 0)
      res.redirect("/");
  
    const response = await insertData(userData);
    console.log(response);
    res.redirect("/");
});
  
router.post("/search", async  (req, res) => {
      let result = await filter(req.body);
      if(result === 0)
        res.redirect('/');
  
      res.render("index", { records: result });
});
    
router.get("/delete/:id", (req, res) => {
    deleteRecord(req.params.id);
    res.redirect('/');
});
  
router.get("/updateRecord/:roll", async (req, res) => {
    
    let searchname = "";
    let searchroll = req.params.roll;
    let searchmobile = "";
    let updateData = {searchname, searchroll, searchmobile};
  
    let result = await filter(updateData);
  
    res.render("updateRecord", { records: result });
});
  
router.post("/updateRecord", async (req, res) => {
    updateRecord(req.body);
    let result = await getData();
    res.render("index", { records: result });

});


// API Call
router.get("/getStudentData", async (req, res) => {
  let result = await getData();
  res.status(201).send(result);
});
  
  

module.exports = router;