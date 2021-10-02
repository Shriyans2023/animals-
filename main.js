function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TGfiP94BM/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResuts);
}


function gotResuts (error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255) + 1;
        random_number_b=Math.floor(Math.random()* 255) + 1;
        random_number_g=Math.floor(Math.random()* 255) + 1;
        document.getElementById("result_label").innerHTML =  'i can hear -'+ 
        results[0].label;
        document.getElementById("result_confidence").innerHTML =  'Accuracy -'+ 
        (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+"(";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+"(";

        img = document.getElementById('catty');
        img = document.getElementById('dodge');

        if (results[0].label == "meow") {
            img.src = 'dodge.jpg';
            img1.src = 'catty.jpg';
            img2.src = 'images.jpg';
        } else if (results[0].label == "bark.") {
            img.src = 'catty.jpg';
            img1.src = 'dodge.jpg';
            img2.src = 'image.jpg';
        } else if (results[0].label == "background noise") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
        }else{
        }
    }
}
