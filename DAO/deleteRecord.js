const Student = require('../Models/Student');

const deleteRecord = async (_id) => {
    const res = await Student.findByIdAndDelete(_id);
    console.log(res);
}

module.exports = deleteRecord;

