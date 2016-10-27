console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New-Value';

var img = document.getElementById('modi');
 var marginLeft = 0;
 
function moveRight()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft  = marginLeft +'px';
    if(marginLeft == 500)
    {
        marginLeft = 0;
    }
}

img.onclick= function(){
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft = '100px';
};


//counter code

var button = document.getElementById('counter');
var counter =0;
button.onclick = function(){
    
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};