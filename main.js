prediction_1 = "";

Webcam.set({
    width:400,
    height:300,
    img_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);

classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pvuvVZKo9/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + prediction_1;
    var UtterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(UtterThis);
}
function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
    if(error)
    {
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("emoji_name").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      speak();
      if(results[0] = "Tumbs Up")
      {
          document.getElementById("update_emoji").innerHTML = "&#9996;"
      }
      if(results[0] = "Finger Heart")
      {
          document.getElementById("update_emoji").innerHTML = "";
      }
      if(results[0] = "Cheese")
      {
          document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
    
    }
}