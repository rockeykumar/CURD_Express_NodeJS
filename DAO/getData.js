const Student = require('../Models/Student');

const getData = async () => {
    const result = await Student.find();
    return result;
};

module.exports = getData;