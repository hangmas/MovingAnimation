var topPosition = 200;
var leftPosition = -100;
var puppy = document.getElementById("puppy");
puppy.style.position = 'absolute';
puppy.style.left = leftPosition +"px";
puppy.style.top = topPosition + "px";
let reverse = -101;
let maxBottom = topPosition + 100;

function runPuppy() {
                    
    //var puppy = document.getElementById("puppy");
    var pos = parseInt(puppy.style.left);
    if(pos < (screen.availWidth - 100)){
        puppy.style.left = (pos + 10) + "px";
        var bottomPos = parseInt(puppy.style.top)
        if(bottomPos <= maxBottom){
            puppy.style.top = (bottomPos + 5) + "px";
        }
    }else{
        puppy.style.transform = "scaleX(-1)"
        reverse = parseInt(puppy.style.left);
    }
    if(reverse >= (leftPosition + 100)){
        puppy.style.left = (pos - 10) + "px";
        var bottomPos = parseInt(puppy.style.top)
        if(bottomPos >= maxBottom){
            puppy.style.top = (bottomPos - 5) + "px";
        }
        reverse = reverse - 10
    }else{
        puppy.style.transform = "scaleX(1)"
    }
    
    
// add if it reaches the screen end (you can check with screen.availwidth)					
}
