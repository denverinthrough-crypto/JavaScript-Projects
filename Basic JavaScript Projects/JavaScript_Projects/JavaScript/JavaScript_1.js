function player_function () {
    var player_output;
    var player = document.getElementById("player_input").value;
    var player_string = " He is a great player!";
    switch(player) {
        case "Kobe":
            player_output = "Kobe" + player_string;
        break;
        case "KG":
            player_output = "KG" + player_string;
        break;
        case "Dirk":
            player_output = "Dirk" + player_string;
        break;
        case "Tim":
            player_output = "Tim" + player_string;
        break;
        case "Ai":
            player_output = "Ai" + player_string;
        break;
        default:
        player_output = "Please enter your GOAT, Thank you.";
    }
    document.getElementById("Output").innerHTML = player_output;
}