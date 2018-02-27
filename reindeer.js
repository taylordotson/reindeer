var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var reindeerLength = reindeer.length;
var reindeerColor = "";

for (var i = 0; i < reindeerLength; i++) {
    reindeerColor += colors[i] + " " + reindeer[i] + "<br>";
}

var hohohoElement = document.getElementById("reindeer");
document.getElementById("reindeer").innerHTML = reindeerColor;