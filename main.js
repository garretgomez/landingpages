var i = 0;
var images = [];
var time = 5000;

images[0] = 'img/tracking.PNG';
images[1] = 'img/alerts.PNG';
images[2] = 'img/history.PNG';
images[3] = 'img/resolution.PNG'; 

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;