var express = require('express');
var path = require('path');
var app = express();

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));

var data={count:0};
app.get('/',function (req,res) {
  data.count++;
  res.render('my_first_ejs',data);
});
app.get('/reset',function (req,res) {
  data.count=0;
  res.render('my_first_ejs',data);
});
app.get('/set/count',function (req,res) {
  data.count++;
  if(req.query.count) data.count=req.query.count;
  res.render('my_first_ejs',data);
});
app.get('/set/:num',function (req,res) {
  data.count=req.params.num;
  res.render('my_first_ejs',data);
});

//app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
//console.log(__dirname);
/*app.get('/',function(req,res){
  res.send('Hello world!');
});*/

app.listen(3000,function(){
  console.log('Server On 2!');
});
