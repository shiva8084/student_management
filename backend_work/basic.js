const express=require('express');
const mysql=require('mysql');
const path=require('path');

const port=5000;

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'entrydetails'
  });
  
  connection.connect(function(err){
      if(err) throw err;
  
      console.log('connected to database......');
  })

app.use(express.json());
app.use(express.urlencoded());




  app.get('/',(req,res)=>{
    return res.render('basic',{
      title:'home'
    });
  })
 
  app.post('/formpost',(req,res)=>{
    var name=req.body.name;
    var phone=req.body.phno;
    var sql="INSERT INTO ENTRY VALUES('"+name+"','"+phone+"')";
    connection.query(sql,(err,result) => {
        if(err) throw err;
      
        console.log('The solution is: ',result);
      })
      
      return res.redirect('/about');

    console.log(name);
    console.log(phone);
    connection.end();
  })






app.listen(port,function(err){
    if(err) throw err;
    console.log('conneted on port',port)
})

