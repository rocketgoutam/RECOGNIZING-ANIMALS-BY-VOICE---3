var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pbm0HbS1c/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;


        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+" , Detcted Cat - "+cat+", Detected Lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is Of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking" ) {
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1; 
        }
        else if(results[0].label == "Meowing" ) {
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1; 
        }
        else if(results[0].label == "Roar" ) {
            img.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Facegif.com%2Froaring-lions-gifs%2F&psig=AOvVaw3_uNu8fSz0jjCGdqJJrBbM&ust=1650043307909000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiSyLuIlPcCFQAAAAAdAAAAABAD";
            lion = lion + 1; 
        }
        else if(results[0].label == "Mooning" ) {
            img.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F75153887504055796%2F&psig=AOvVaw0ckNnhpAi2S_-3YRIRcWeh&ust=1650043334650000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCqycyIlPcCFQAAAAAdAAAAABAP";
            cow = cow + 1; 
        }
        else{
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";   
        }
    }
}