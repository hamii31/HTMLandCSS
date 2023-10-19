function MyFunc(){
    var text = "";
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var squat = document.getElementById('squat').value;
    var bench = document.getElementById("bench").value;
    var deadlift = document.getElementById("deadlift").value;

    text += "<hr>";
    text += "Suggested age division, weight class and attempts" + "<br><br>";
    

    text += "<br> Age Division: <br>";

    if(age < 15){
        text += "Unable to compete" + "<br>";
    }
    else if(age >= 15 && age <= 18){
        text += "Sub-Junior Division" + "<br>";
    }
    else if(age >= 19 && age <= 23){
        text += "Junior Division" + "<br>";
    }
    else if(age >= 24 && age <= 39){
        text += "Open Division" + "<br>";
    }
    else if(age >= 40 && age <= 49){
        text += "Masters 1 Division" + "<br>";
    }
    else if(age >= 50 && age <= 59){
        text += "Masters 2 Division" + "<br>";
    }
    else if(age >= 60 && age <= 69){
        text += "Masters 3 Division" + "<br>";
    }
    else{
        text += "Masters 4 Division" + "<br>";
    }


    text += "<br><br> Weight Class: <br>";

    if(weight < 40){
        text += "Unable to compete" + "<br>";
    }
    else if(weight >= 40 && weight < 44){
        text += "40kg Weight Class" + "<br>";
    }
    else if(weight >= 44 && weight < 48){
        text += "44kg Weight Class" + "<br>";
    }
    else if(weight >= 48 && weight < 52){
        text += "48kg Weight Class" + "<br>";
    }
    else if(weight >= 52 && weight < 56){
        text += "52kg Weight Class" + "<br>";
    }
    else if(weight >= 56 && weight < 60){
        text += "56kg Weight Class" + "<br>";
    }
    else if(weight >= 60 && weight < 67.5){
        text += "60kg Weight Class" + "<br>";
    }
    else if(weight >= 67.5 && weight < 75){
        text += "67.5kg Weight Class" + "<br>";
    }
    else if(weight >= 75 && weight < 82.5){
        text += "75kg Weight Class" + "<br>";
    }
    else if(weight >= 82.5 && weight < 90){
        text += "82.5kg Weight Class" + "<br>";
    }
    else if(weight >= 90 && weight < 100){
        text += "90kg Weight Class" + "<br>";
    }
    else if(weight >= 100 && weight < 110){
        text += "100kg Weight Class" + "<br>";
    }
    else if(weight >= 110 && weight < 125){
        text += "110kg Weight Class" + "<br>";
    }
    else if(weight >= 125 && weight < 140){
        text += "125kg Weight Class" + "<br>";
    }
    else if(weight == 140){
        text += "140kg Weight Class" + "<br>";
    }
    else{
        text += "140kg+ Weight Class" + "<br>";
    }

    text += "<br><br> Suggested Attempts: <br>";

    text += "<br> Squat <br>";

    if(squat <= 0){
        text += "Invalid Squat weight!";
    }
    else{
        var opener = 91 / 100 * squat;
        text += "Opener: " + (Math.round(opener * 100) / 100).toFixed(1)  + "kg <br>";

        var second = 96 / 100 * squat;
        text += "Second Attempt: " + (Math.round(second * 100) / 100).toFixed(1) + "kg <br>";

        var third = 101 / 100 * squat;
        text += "Third Attempt: " + (Math.round(third * 100) / 100).toFixed(1)  + "kg <br>";
    }

    text += "<br> Bench <br>";

    if(bench <= 0){
        text += "Invalid Bench press weight!";
    }
    else{
        var opener = 91 / 100 * bench;
        text += "Opener: " + (Math.round(opener * 100) / 100).toFixed(1)  + "kg <br>";

        var second = 96 / 100 * bench;
        text += "Second Attempt: " + (Math.round(second * 100) / 100).toFixed(1) + "kg <br>";

        var third = 101 / 100 * bench;
        text += "Third Attempt: " + (Math.round(third * 100) / 100).toFixed(1)  + "kg <br>";
    }

    text += "<br> Deadlift <br>";

    if(deadlift <= 0){
        text += "Invalid Deadlift weight!";
    }
    else{
        var opener = 91 / 100 * deadlift;
        text += "Opener: " + (Math.round(opener * 100) / 100).toFixed(1)  + "kg <br>";

        var second = 96 / 100 * deadlift;
        text += "Second Attempt: " + (Math.round(second * 100) / 100).toFixed(1) + "kg <br>";

        var third = 101 / 100 * deadlift;
        text += "Third Attempt: " + (Math.round(third * 100) / 100).toFixed(1)  + "kg <br>";
    }

    text += "<hr>";

    document.getElementById("inprint").innerHTML = text;
}
