x = 0;
y = 0;
apple_drawn = ""
speak_data = "";
to_number = "";
apple=""

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listining, please speak."
    recognition.start();
  
}



recognition.onresult = function (event) {
    console.log(event);
    
    content = event.results[0][0].transcript;
    to_number=Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized " + content;
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started Drawing Apple"; 
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        apple_drawn = "set";
        
      }
      else{
          document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
      }

}

function setup() {
    canvas = createCanvas(900, 600);
    canvas.center();
    
}

function draw() {
    if (apple_drawn == "set") {
        for (var i = 1; i <= to_number; i++) {
            x=Math.floor(Math.random()*900);
           y=Math.floor(Math.random()*600);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = "Apple/Apples is drawn.";
        apple_drawn = "";
        speak_data = to_number + "Apples Drawn";
        speak();
        
    }

}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {
    apple = loadImage("apple.png");
  
}