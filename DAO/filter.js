const Student = require('../Models/Student');

const filter =  (searchData) => {
    let name = searchData.searchname;
    let roll = searchData.searchroll;
    let mobile = searchData.searchmobile;

    let filterParameter = {};

    if(name != "" && roll != "" && mobile != "")
        filterParameter = {name, roll, mobile};
    else if(name != "" && roll != "")
        filterParameter = {name, roll};
    else if(name != "" && mobile != "")
        filterParameter = {name, mobile};
    else if(roll != "" && mobile != "")
        filterParameter = {roll, mobile};
    else if(name != "")
        filterParameter = {name};
    else if(roll != "")
        filterParameter = {roll};
    else if(mobile != "")
        filterParameter = {mobile};
    else
        return 0;
    // console.log(filterParameter);
    const result =  Student.find(filterParameter);
    // console.log(result); 
    return result;
};

module.exports = filter;

// let _id = "608060080a250a12585b7957";