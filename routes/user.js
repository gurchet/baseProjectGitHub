/* GET home page. */
var express = require('express');
var router  = express.Router();
var mongodb = require('mongodb');
router.get('/',function(req,res,next)
{
  //console.log("TESTING");
 res.render('home',{ title: 'Home' });
  //res.render('Login',{ title: 'Home' });
});
router.get('/UserAuth',function(req, res)
{ 
  var username=req.param('username');
  var password=req.param('password');
  console.log(username + ":"+password );
  isUserAvailable(username,password,function(data){
    console.log('something'+data);
      //res.json(data);
      if(data!=null)
        res.send(true);
      else
        res.send(false);
        //res.render('Records',{Name:'null'});
    });
});


// Method to search Password corresponding to given username from Database
function isUserAvailable(username,password,callback){

  var mongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/BlackCat';

  mongoClient.connect(url,username,password,function(err,db)
  {
    if(err)
    {
      console.log("not connected to mongodb");
      console.log(err);
      throw err;
    }
    else
    {
     console.log("connected to mongodb");
   }
   console.log("here username is :"+username+":"+password);
var user=String(username);
var pass=String(password);
   db.collection('Employees', function(err, collection) {
     console.log("here username also is : "+user+" password: "+pass);
     collection.findOne({"UserName":user,"Password":pass},function (err, doc) {
      if (err) {
        console.log(err+"---MYNAME");
        callback(null);
      } else {
        console.log('Fetched:', doc);
        callback(doc);
      }
    });
   });
   //db.close();

 });
} // closed function isUserAvailable

function getResult(ID,callback){

  var mongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/BlackCat';

  mongoClient.connect(url,function(err,db)
  {
    if(err)
    {
      console.log("not connected to mongodb");
      console.log(err);
      throw err;
    }
    else
    {
     console.log("connected to mongodb");
   }
   console.log("here ID is : "+ID);
   db.collection('Loan',ID, function(err, collection) {
     console.log("here ID also is : "+ID);
     var SearchID = parseInt(ID);
     collection.findOne({LoanId:SearchID},function (err, doc) {
      if (err) {
        console.log(err+"---MYNAME");
        callback(err);
      } else {
        console.log('Fetched:', doc);
        callback(doc);
      }
    });
   });
   db.close();

 });
}

module.exports = router;