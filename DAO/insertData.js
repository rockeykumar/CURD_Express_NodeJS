const Student = require("../Models/Student");

const insertData = async (data) => {
  let roll = data.roll;
  let result = await Student.find({ roll });
  console.log(data);

  if (result.length !== 0) {
    return "User already exits...!";
  } else {

    // let name = data.name;
    // let roll = data.roll;
    // let mobile = data.mobile;
    // let address = data.address;
    // let profileImage = data.profileImage;

    // console.log(profileImage);
    // const result = new Student({name, roll, mobile, address, profileImage});

    const result = new Student(data);
    const obj = await result.save();

    return obj;
  }
};

module.exports = insertData;

















