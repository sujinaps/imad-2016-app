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

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
    if(request.readystate == XMLHttpRequest.DONE)
    {
    
        if(request.status == 200)
        {
            var counter = request.ResponseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    
    }
    
    };

};