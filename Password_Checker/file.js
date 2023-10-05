function PassCheck(){
    var text = "";
    var x = document.getElementById("pass").value;
    var p = document.getElementById("res");
    var errorCount = 0;

    //checks password length
    if(x.length < 8){
        text += "Passoword is too short!" + "<br>"
        errorCount++;
    }

    // checks if password has special characters
    var regex = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    if(!regex.test(x)){
        text += "Password does not contain special characters!" + "<br>"
        errorCount++;
    }

    // checks if password has numbers
    if(!/\d/.test(x)){
        text += "Password does not contain any numbers!" + "<br>"
        errorCount++;
    }

    // gets "password" to highlight it
    var highlight = document.getElementById("highlight");
    switch(errorCount){
        case 0:
            highlight.style.color ="#9BF906"
            break;
        case 1:
            highlight.style.color="#F4F30B"
            break;
        case 2:
            highlight.style.color="#F98C06"
            break;
        case 3:
            highlight.style.color="#FB040D"
            break;
    }

    // fills up the empty paragraph
    document.getElementById("res").innerHTML = text;
}
