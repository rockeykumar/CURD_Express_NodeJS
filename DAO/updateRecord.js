const Student = require('../Models/Student');

const updateRecord = async (studentParams) => {
    // console.log("-------------------------------------------------------------------------------------------");
    let _id = studentParams._id;
    let name = studentParams.name;
    let roll = studentParams.roll;
    let mobile = studentParams.mobile;
    let address = studentParams.address;

    let obj = await Student.findByIdAndUpdate({_id}, {
        $set: {
            name,
            roll,
            mobile,
            address
        }
    });

    // console.log("*************************************************************************8");
    // console.log(obj);
    // console.log("*************************************************************************8");
};

module.exports = updateRecord;