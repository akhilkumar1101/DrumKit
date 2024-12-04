for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonName = this.innerHTML

        switch (buttonName) {
            case "w":
                var audioW = new Audio('sounds/tom-1.mp3')
                audioW.play()
                break;
            
            case "a":
                var audioA = new Audio('sounds/tom-2.mp3')
                audioA.play()
                break;
            
            case "s":
                var audioS = new Audio('sounds/tom-3.mp3')
                audioS.play()
                break;

            case "d":
                var audioD = new Audio('sounds/tom-4.mp3')
                audioD.play()
                break;

            case "j":
                var audioJ = new Audio('sounds/snare.mp3')
                audioJ.play()
                break;

            case "k":
                var audioK = new Audio('sounds/crash.mp3')
                audioK.play()
                break;

            case "l":
                var audioL = new Audio('sounds/kick-bass.mp3')
                audioL.play()
                break;

            default:console.log(buttonName)
                break;
        }
        buttonAnimation(this.innerHTML) 
}

)


}


document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case 'w':
            var audioW = new Audio('sounds/tom-1.mp3')
            audioW.play()
            break;
            
            case "a":
                var audioA = new Audio('sounds/tom-2.mp3')
                audioA.play()
                break;
            
            case "s":
                var audioS = new Audio('sounds/tom-3.mp3')
                audioS.play()
                break;

            case "d":
                var audioD = new Audio('sounds/tom-4.mp3')
                audioD.play()
                break;

            case "j":
                var audioJ = new Audio('sounds/snare.mp3')
                audioJ.play()
                break;

            case "k":
                var audioK = new Audio('sounds/crash.mp3')
                audioK.play()
                break;

            case "l":
                var audioL = new Audio('sounds/kick-bass.mp3')
                audioL.play()
                break;
    
        default:console.log(e.key)
            break;
    }
    buttonAnimation(e.key)
}
)

function buttonAnimation(currentKey){

   var activeKey = document.querySelector("."+currentKey)
   activeKey.classList.add("pressed")
   activeKey.style.color = "white"

   setTimeout(function () {
    activeKey.classList.remove("pressed")
    activeKey.style.color = "#DA0463"
   },100)
}


