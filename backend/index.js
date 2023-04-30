const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose=require("mongoose");

app.use(express.json());
const cors=require('cors');

app.use(cors());
const db=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/Form",{useNewUrlParser:true,
    useUnifiedTopology:true
    },()=>{
        console.log("database connected");
    });
}
db();

//Start User Schema of User********************************************
const userSchema=new mongoose.Schema({
    name:String,
    dob:Date,
         sex:String,
        mobile:String,
        giid:String,
        panAdhar:String,
        gardianDetail:String,
        gardianDetail2:String,
        email:String,
        emergencyContact:String,
        address:String,
           state:String,
           city:String,
           country:String,
           pincode:String,
           occupation:String,
           religion:String,
           maritalStatus:String,
           bloodGroup:String,
           nationality:String

            
    
})
const User= mongoose.model('USER',userSchema);
// End Of User Schema******************************
// Post route of form**************************
app.post("/form",async(req,res)=>{
    try{
const data=new User(req.body);
const form=await data.save();
if(form){
    res.status(201).send("succesfully save");
}else{
    res.status(500).send("error");
}
    }catch(err){
        console.log("error")
    }
})
//End of Post form **********************************************
// Start of Get Route of Form************************************
app.get("/form",async(req,res)=>{
    const user=await User.find();
    res.status(200).send(user);
})
// End OF Route**********************************************
app.listen(3000, () => {
  console.log(`server running port is $ 3000`);
});
