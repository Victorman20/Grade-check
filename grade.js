var songs = new Audio("Great Daniel - Prayer .mp3")
var song4 = new Audio("CeCe_Winans_-_Goodness_Of_God_(Official_Audio)(128k).mp3")
var song3 = new Audio("Emmanuel God with us (Spontaneous Worship with Lawrence Oyor and Judith Kanayo a.k.a Judikay) (64  kbps).mp3")
var song2 = new Audio("Enkay_Ogboruche_feat_Nathaniel_Bassey_-_CHIOMA(128k).mp3")
var song1 = new Audio("Folabi Nuel - In My Boat (Live).mp3")
// var maxscore = 100

function checkscore(){
    var myscore = inputbox.value
    if (myscore >= 45 && myscore <=49 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>PASS</h1>";
        songs.play();
    }
    else if( myscore >=30 && myscore <=44){
        doc.innerHTML = "<h1>FAIL</h1>";
        songs.play();
    }
    else if (myscore >= 50 && myscore <=59 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>CREDIT</h1>";
        song1.play();
    }

    else if (myscore >= 60 && myscore <=69 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>B<br>GOOD</h1>";
        song2.play();
    }
    
    else if (myscore >= 70 && myscore <=100 ){
        // alert ("Omo mi");
        doc.innerHTML = "<h1>EXCELLENT</h1>";
        song3.play();
    }

    else if (myscore >100 || myscore <0 ){
        // alert ("YOUR ");
        doc.innerHTML = "<h1>invalid</h1>";
        song4.play();
    }
    else if (myscore != Number ){
        alert ("Enter number");
        // doc.innerHTML = "<h1></h1>";
        song4.play();
    }

    else{
        doc.innerHTML = "<h1>Enter something</h1>";
    }
}