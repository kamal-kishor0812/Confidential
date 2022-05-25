const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();

app.set("view engine",ejs)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//todo our API starts here


mongoose.connect("mongodb://localhost:27017/employeeDB");

const studentSchema = {
        fullName:String,
        rollNo:Number,
        email:String,
        department:String
    }

const Student = mongoose.model("Student", studentSchema);




app.get("/",function(req,res)
{
    res.sendFile("/index");
})


app.get("/students",function(req,res){

    Student.find({},function(err,foundStudents)
    {
        if(!err)
        res.render("./Students.ejs",{Students:foundStudents});

        else
        res.send(err);
    })
});

app.post('/register',function(req,res){

    const fullname = req.body.floatingName;
    const email = req.body.floatingEmail;
    const rollno = req.body.floatingRollno;
    const dept = req.body.floatingDepartment;

    const newStudent = new Student({
        fullName:fullname,
        rollNo:rollno,
        email:email,
        department:dept
    })

    

    newStudent.save(function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("index.ejs",{status:'display:block;'});
            console.log(result);
        }
    })



})
app.post('/delete' ,(req,res)=>
{

    {
        const rollno = req.body.roll;

        Student.findOneAndDelete({rollNo:rollno},(err,docs)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                Student.find({},function(err,foundStudents)
                {
                    if(!err)
                    res.render("./Students.ejs",{Students:foundStudents});
            
                    else
                    res.send(err);
                })
            }
        })
    }
    

    
})




app.listen(4000,function() {
    console.log("server running on port 4000");
    
})