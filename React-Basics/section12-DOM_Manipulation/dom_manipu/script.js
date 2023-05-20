var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var item = document.getElementById("new-item");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

// TODO: If you click on the list item, it toggles the .done  class on and off.
// TODO: Add .wrapper class to current items #DONE
// TODO: Add buttons next to each list item.. #DONE
// TODO: to delete the item when clicked on its corresponding delete button.



function createListElement() {
    // Create a div element to hold the list item and the delete button
    var div = document.createElement("div");
    div.classList.add("wrapper");

    // Create input checkbox element
    var boxinput = document.createElement("input");
    boxinput.classList.add("checkdone");
    boxinput.type = "checkbox";

    // Create a li element 
    var li = document.createElement("li");
    li.classList.add("taskClass");

    // Create delete button
    var delButtion = document.createElement("button");
    delButtion.classList.add("delClass");

    // add div to ul element
    ul.appendChild(div)

    // add li and delete element to div element
    div.append(boxinput, li, delButtion);

    li.appendChild(document.createTextNode(input.value));

    // add Delete button
    delButtion.innerHTML="X"

    input.value = "";
}

// Create a completed task element
function completedTasks() {
    var div = document.createElement("div");
    div.classList.add("wrapper");
    

}

function inputLenght() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLenght() > 0 ) {
        createListElement();
    }

}

function addListAfterKeypress(event) {
    if (inputLenght() > 0 && event.code === "Enter") {
        createListElement();
    }

}

function deleteListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

// function doneTask(element) {
    
//     if (element.target.className === "done") {
//         // add a line through the text of the list item
//         element.target.classList.toggle("done");
//         element.target.style.textDecoration = "line-through";
//     } 
//     else if (element.target.style.textDecoration === "line-through") {
//         element.target.classList.toggle("done");
//         element.target.style.textDecoration = "none";

//     }
    
// }

function doneTask(element) {
    
    if (element.target.className === "done") {
        // add a line through the text of the list item
        element.target.classList.toggle("done");
        element.target.style.textDecoration = "line-through";
    } 
    else if (element.target.style.textDecoration === "line-through") {
        element.target.classList.toggle("done");
        element.target.style.textDecoration = "none";

    }
    
}
function checkBox() {
    var checkBox = document.getElementsByClassName("checkdone");
    var li = document.getElementsByClassName("done");
    for (let index = 0; index < checkBox.length; index++) {
        if (checkBox[index].checked == true) {
            li[index].style.textDecoration = "line-through";
            deleteListElement(li[index]);
    } 
        else if (checkBox[index].checked == false) {
            li[index].style.textDecoration = "none";
        }
}
}

        // add a line through the text of the list item
        // element.target.classList.toggle("checkdone");
        // element.target.style.textDecoration = "line-through";
    // else if (element.target.style.textDecoration === "line-through") {
    //     element.target.classList.toggle("done");
    //     element.target.style.textDecoration = "none";

    // }
    

function hangleUlClick(element) {
    deleteListElement(element);
}

ul.addEventListener("click", checkBox);
ul.addEventListener("click", hangleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
