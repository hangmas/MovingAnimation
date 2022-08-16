function changeColor(){
    var selectedColor = document.querySelector('input[type=radio][name=color]:checked').value;
    document.getElementById("text").style.color = selectedColor;
}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
}

function changeBgColor(){
}

function changeBg(){
    var x = document.getElementById("colorsel");
    var i = x.selectedIndex;
    var val = x.options[i].value
    document.getElementById("td_text").style.backgroundColor=val;   
}
