window.onload = function GetDateTime(){
    var currentDate = new Date();
    var date = currentDate.getDate() + "/"
    + (currentDate.getMonth() + 1) + "/" 
    + currentDate.getFullYear();

    var time = currentDate.getHours() + ":" 
    if(currentDate.getMinutes() < 10){
        time += "0" + currentDate.getMinutes();
    }
    else{
       time += currentDate.getMinutes();
    }

    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
}
