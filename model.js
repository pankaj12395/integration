const {default:mongoose}=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:[true , "name is require"]
    },
    email:{
        type:String,
        require:[true , "email is require"]
    },
    password:{
        type:String,
        require:true,
        minLength:[6,"password is require"]
    },
    mobile:{
        type:String,
        require:[true, "number is require"],
        minLength:10,
        maxLength:10
    },
    address:{
        type:String,
        require:[true , "address is require"]
    }
})
const UserModel= mongoose.model("users" , userSchema)
module.exports=UserModel