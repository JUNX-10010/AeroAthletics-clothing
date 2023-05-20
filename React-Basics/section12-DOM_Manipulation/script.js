var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var css = document.querySelector("h3");
var randomButton = document.createElement("button");
randomButton.classList = "randomColor";
randomButton.textContent = "Randomizer";
body.append(randomButton)

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.textContent = body.style.background;
} 
// Get Random Int Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
function RGBtoHex(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

// This function handles the action after random color button clicked
function randAction() {
    rand1 = [getRandomInt(255),getRandomInt(255),getRandomInt(255)];
    rand2 = [getRandomInt(255),getRandomInt(255),getRandomInt(255)];
    body.style.background = `linear-gradient(to right,
        rgb(${rand1.at(0)},${rand1.at(1)},${rand1.at(2)}),
        rgb(${rand2.at(0)},${rand2.at(1)},${rand2.at(2)})`;
    color1.value = RGBtoHex(rand1.at(0),rand1.at(1),rand1.at(2));
    color2.value = RGBtoHex(rand2.at(0),rand2.at(1),rand2.at(2));
    css.textContent = body.style.background;

}
randomButton.addEventListener("click",randAction);   
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
setGradient() 