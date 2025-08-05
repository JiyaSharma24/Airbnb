const mongoose = require("mongoose");
const schema= mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new schema({
email :{
    type: String,
     required: true,
},
});
// passportLocalMongoose automatic make username and password so no need to add it vo khud in bhot sare method add kr deta hai can read in npm web

UserSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model("User",UserSchema);
