var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('Hello world!');
});

app.listen(3000,function(){
  console.log('Server On!');
});



/* function fizzBuzz(argument) {
  for(i=1;i<=100;i++){
    console.log("hello : "+i);
  }
}

fizzBuzz();
*/
