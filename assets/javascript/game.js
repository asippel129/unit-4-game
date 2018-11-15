
//OUR GLOBAL VARIABLES
//our randomly generated number that the user will try to add up to (in between 19 and 120)
var goalNumber = (Math.floor(Math.random() * 120) + 19);
$("#goal-number").text(goalNumber); //this is how we will print to the goal-number id div the randomly generated number

var counter = 0; //this is the score that will be manipulated throughout the game
//our array of crystal images 
var imagesArr = ["assets/images/blue.jpg", "assets/images/gypsy.jpg", "assets/images/pink.jpg", "assets/images/purple.gif"];
//our numberOptions array that will eventually be linked with our images array to assign the randomly generated number between 1 and 12
var numberOptions = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)];
var wins = 0;
var losses = 0;


//now we create a loop to link our crystal images with the same index in the number array



for (var i = 0; i < numberOptions.length; i++) {
    //for each iteration, we will assign/link the image crystal to its variable to eventually assign a random number value to it. 
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");//assigning a class 
    imageCrystal.attr("src", imagesArr[i]);
    imageCrystal.attr("data-crystalValue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}


//now we need a click event occur for every crystal image on the page, not just one (bc we assigned them all the class of crystal-image)
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter-score").text(counter);


    //our win-lose logic

    if (counter === goalNumber) {
        wins++;
        $("#win-lose").html("<h2>Winner!</h2>");
        $("#wins").text(wins);
        counter = 0;
      

    }

    if (counter >= goalNumber) {
        losses++;
        $("#win-lose").html("<h2>You Lose! </h2>");
        $("#losses").text(losses);
        counter = 0;
        

    }

})




