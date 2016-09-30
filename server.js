var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articleone ={
    title:'Article-one myself Sujina',
    heading :'Article One',
    date: 'Sep 2 2016',
    content: `<p>
                    This is the Content for Article one This is the Content for Article one This is the Content for Article one This is the Content for Article one This is the Content for Article one
                </p>
                <p>
                    This is the Content for Article one This is the Content for Article one`
}; /* added by me to reduce the html code Module P4*/

function CreateTemplate(data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate ={
      
   <head>
        <title>
             ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>

        <body>
            <div class="container">
            <div>
                <a href='/'>home></a>
            </div>
            <hr/>
            <h3>
                 ${heading}
            </h3>
            <div>
                 ${date}
            </div>
            <div>
                ${content}
            </div>
            
         </div>
    </body>

 
};
    
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one',function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
  res.send(createTemplate(Articleone));
}); 
  app.get('/Article-two',function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/Article-three',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
