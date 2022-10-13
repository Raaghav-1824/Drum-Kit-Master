// debugger;
var soundlength=document.querySelectorAll(".sound button").length;
for (i=0;i<soundlength;i++){
    document.getElementsByTagName("button")[i].addEventListener("keydown" ,function(event){
        onclicktext=event.key
        clicksound(onclicktext);
        clickAnimation(onclicktext);
    })}             

    
    function clickAnimation(onclicktext){
        var value=("." +String(onclicktext).toUpperCase())
        console.log(onclicktext.toUpperCase())
        element=document.querySelector(value).classList.add("anime")

        setTimeout(function(){document.querySelector(value).classList.remove("anime")},100);
       

    }

    function clicksound(){
    //    console.log(onclicktext);
    switch (onclicktext) {
        case "a":
            var sound=new Audio("./sound/crash.mp3");
            sound.play();  
            break;
        case "b":
            var sound=new Audio("./sound/kick-bass.mp3");
            sound.play();
            break;
        case "c":
            var sound=new Audio("./sound/snare.mp3");
            sound.play();
            break;
        case "d":
                var sound=new Audio("./sound/tom-1.mp3");
                sound.play(); 
                break;
        case "e":
                var sound=new Audio("./sound/tom-2.mp3");
                sound.play();
                break;
        case "f":
                var sound=new Audio("./sound/tom-3.mp3");
                sound.play();
                break;
        case "g":
            var sound=new Audio("./sound/tom-4.mp3");
            sound.play();
            break;
    
        default:
            break;
    }
       
    }


 





// function add(x,y){
//     return(x+y);
// }








// Doubts
// var soundlength=document.querySelectorAll(".sound button").length;
// // console.log(soundlength)
// for (i=0;i<soundlength;i++){
//     document.getElementsByTagName("button")[i].addEventListener("keydown" ,function(event){
//         onclicktext=event.key
//         clicksound();
//     })}                                    //do not understand why it is not working with arrow function
//                                            // console.log(event.key)
//                                          //    onclicktext=this    //Do not under stand why this contain only first object












// var soundlength=document.getElementsByTagName("button").length;
// // console.log(soundlength)
// for (i=0;i<soundlength;i++){
//     document.getElementsByTagName("button")[i].addEventListener("click", myfunction())
//     console.log(this)

// }

// function myfunction(){
//     var sand=new Audio("./sound/crash.mp3")
//     sand.play()
//  }

// myfunction();