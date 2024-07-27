const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyparser = require('body-parser');
const { response } = require('express');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'design')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student database'
});

connection.connect(function (err) {
  if (err) throw err;

  console.log('connected to database...... ');
})


app.get('/', (req, res) => {
  return res.render('admin', {
    title: 'login'
  });
})

app.get('/login', (req, res) => {
  return res.render('login', {
    title: 'admin'
  });
})

app.post('/loginpost', (req, res) => {
  var nam = req.body.nm;
  var pswd = req.body.psswd;

  var qry = 'SELECT name FROM admin_login WHERE username="' + nam + '" AND password= "' + pswd + '"';
  console.log(pswd);
  connection.query(qry, (err, result) => {
    if (err) throw err
    else
      if (result.length > 0) {
        res.redirect('/adminlogin');
        console.log('works perfectly');
      }

      else {
        alert('worng pass or usernaame')
        res.redirect('back')
      }
  })



});

app.get('/adminlogin', (req, res) => {
  return res.render('adminlogin', {
    title: 'admin'
  });
})

app.get('/admin-stu-login', (req, res) => {
  return res.render('admin-stu-login', {
    title: 'admin-student-login'
  });
})




var stuidd;


app.post('/stuidvalid', (req, res) => {
  stuidd = req.body.stuid;

  var qry = 'SELECT * FROM stu_all_details WHERE stu_id="' + stuidd + '"';
  connection.query(qry, (err) => {
    if (err) throw err;
    console.log('stu-id-connect works perfectly')
  })
  res.redirect('/displayadmin');

});



var nwstid1;
app.post('/markssent', (req, res) => {
  var stid = req.body.nwstid;
  var sb1 = req.body.sub1; var s1ia1 = req.body.s1i1; var s1ia2 = req.body.s1i2; var s1ia3 = req.body.s1i3; var s1f = req.body.s1f;
  nwstid1 = stid + sb1;
  var qry2 = 'SELECT * FROM stu_subandmarks WHERE st_id = "' + nwstid1 + '"';
  connection.query(qry2, (err, result) => {
    if (err) throw err;
    console.log('stu-id-connect works1 perfectly', result);

    if (result == 0) {
      var qry = 'INSERT INTO stu_subandmarks VALUES ("' + nwstid1 + '","' + sb1 + '","' + s1ia1 + '","' + s1ia2 + '","' + s1ia3 + '","' + s1f + '","' + stid + '")';
      connection.query(qry, (err) => {
        if (err) throw err;
        console.log('stu-id-connect works2 perfectly')
      })
      res.redirect('/displayadmin');
    }
    else {
      console.log('stu-id-connect works3 perfectly')
      var qry1 = 'UPDATE stu_subandmarks SET ia1="' + s1ia1 + '",ia2="' + s1ia2 + '",ia3="' + s1ia3 + '",final="' + s1f + '",st_id1="' + stid + '" WHERE st_id="' + nwstid1 + '"';
      connection.query(qry1, (err) => {
        if (err) throw err;
        console.log('stu-id-connect works4 perfectly')
      })
      res.redirect('/displayadmin');
    }
  })
});

app.get('/displayadmin', (req, res) => {

  console.log(stuidd);
  connection.query('SELECT * FROM stu_all_details WHERE stu_id ="' + stuidd + '"', function (err, result) {
    if (err) throw err;
    else {
      if (result.length > 0) {
        console.log('its working', result);
        res.render('displayadmin', { title: 'studentdata', data: result });
      }
    }
  });
})





app.get('/backtostudentlogin', (req, res) => {
  return res.render('admin-stu-login', {
    title: 'student login'
  });
})
app.get('/backtoadminlogin', (req, res) => {
  return res.render('adminlogin', {
    title: 'student login'
  });
})
app.get('/home', (req, res) => {
  return res.render('admin', {
    title: 'login'
  });
})
app.get('/student', (req, res) => {
  return res.render('student', {
    title: 'login'
  });
})





app.get('/new-stu', (req, res) => {
  return res.render('new-stu', {
    title: 'new entey'
  });
})

app.post('/btoe', (req, res) => {
  var stid = req.body.stuid;
  var namee = req.body.nam;
  var dobirth = req.body.date;
  var g = req.body.gender;
  var addr = req.body.address;
  var faname = req.body.fnam;
  var moname = req.body.mnam;
  var mbno = req.body.num;
  var emaill = req.body.email;
  var classt = req.body.ctnam;
  console.log(stid);
  var qry1 = 'SELECT * FROM stu_all_details WHERE stu_id = "' + stid + '"';

  connection.query(qry1, (err, result) => {
    console.log(result);
    if (result != 0)
      res.send('ERR!............STUDENTID is already present    <br>   PLEASE ENTRT NEW DATA  ');
    else {
      var qry = 'INSERT INTO stu_all_details VALUES("' + stid + '","' + namee + '","' + dobirth + '","' + g + '","' + addr + '","' + faname + '","' + moname + '","' + mbno + '","' + emaill + '","' + classt + '")';
      connection.query(qry, (err) => {
        if (err) throw err;
        else
          return res.redirect('/adminlogin');
      })

    }
  });
});


app.get('/student', (req, res) => {
  return res.render('student', {
    title: 'student'
  });
})

var stdntid;
app.post('/stuloginpost', (req, res) => {
  stdntid = req.body.stuid;

  var qry = 'SELECT * FROM stu_all_details WHERE stu_id="' + stdntid + '"';
  connection.query(qry, (err) => {
    if (err) throw err;
    console.log('sussess')
  })
  res.redirect('/displaystu');
});


app.get('/displaystu', (req, res) => {
  console.log(stdntid);
  connection.query('SELECT * FROM stu_all_details WHERE stu_id ="' + stdntid + '"', function (err, result) {
    if (err) throw err;
    else {
      if (result.length > 0) {
        console.log('its working', result);
        res.render('displaystu', { title: 'studentdata', data: result });
      }
    }
  });
})
app.get('/marksadminview', (req, res) => {
  console.log(stuidd);
  connection.query('SELECT * FROM stu_subandmarks WHERE st_id1="' + stuidd + '"', function (err, result) {
    if (err) throw err;
    else {

      console.log('its working', result);
      res.render('marksadmindisplay', { title: 'studentmarks', data: result });

    }
  });
})


app.get('/marksadmin', (req, res) => {
  return res.render('marksadminentry', {
    title: 'student'
  });
})






app.get('/edit', (req, res) => {
  return res.render('stuupdate', {
    title: 'edit'
  });
})

app.post('/update', (req, res) => {
  var stid = req.body.stuid;
  var name = req.body.nam;
  var dob = req.body.date;
  var gender = req.body.gender;
  var add = req.body.address;
  var fname = req.body.fnam;
  var mname = req.body.mnam;
  var mno = req.body.num;
  var email = req.body.email;
  var ct = req.body.ctnam;

  var qry = 'UPDATE stu_all_details SET name="' + name + '",date_of_birth="' + dob + '",gender="' + gender + '",address="' + add + '",father_name="' + fname + '",mother_name="' + mname + '",mobile_no="' + mno + '",email="' + email + '",class_teacher="' + ct + '" WHERE stu_id ="' + stid + '" ';
  connection.query(qry, (err) => {
    if (err) throw err;

    res.redirect('/adminlogin');


  })


});

app.get('/marksdisplay', (req, res) => {
  console.log(stdntid);
  connection.query('SELECT * FROM stu_subandmarks WHERE st_id1="' + stdntid + '"', function (err, result) {
    if (err) throw err;
    else {

      console.log('its working', result);
      res.render('marksstudent', { title: 'studentmarks', data: result });

    }
  });
})


app.get('/displaystu', (req, res) => {
  return res.render('displaystu', {
    title: 'student details'
  });
})



app.listen(port, function (err) {
  if (err) throw err;
  console.log('conneted on port', port);
})