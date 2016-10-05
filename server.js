var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articles = {
    
     'Article-one' :{
    title:'Article-one myself Sujina',
    heading :'Article One',
    date: 'Sep 2 2016',
    content: `<p>
                    This is the Content for Article one This is the Content for Article one This is the Content for Article one This is the Content for Article one This is the Content for Article one
                </p>
                <p>
                    This is the Content for Article one This is the Content for Article one`
     },
     'Article-two':{
        title:'Article-two myself Sujina',
        heading :'Article two',
        date: 'Sep 2 2016',
        content: `<p>
                    This is the Content for Article two 
                </p>
                <p>
                    This is the Content for Article two This is the Content for Article two`
    },
    'Article-three':{
        title:'Article-three myself Sujina',
        heading :'Article three',
        date: 'Sep 2 2016',
        content: `<p>
                    This is the Content for Article three This is the Content for Article three 
                </p>
                <p>
                    This is the Content for Article three `
                  
}
    
};


/*var Articleone ={
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
    var htmlTemplate =`
    
    <html>
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

</html>
`;
    
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/Article-one',function (req, res) {
app.get('/:ArticleName',function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
  //res.send(CreateTemplate(Articleone)); 
  var ArticleName = req.params.ArticleName;
  res.send(CreateTemplate(Articles[ArticleName]));
  
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
