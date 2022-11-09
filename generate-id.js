const mongoose = require("mongoose");

module.exports = {    
    generateInterplaiId : async function () {
        try {
            let interplaiObjectId = mongoose.Types.ObjectId();
            let interplaiId = interplaiObjectId.toString();
            return interplaiId;
        } catch (err) {
            console.log("generateInterplai Id : ", err);
        }
    },
}