"use strict";

window.onload = init;

function init (){
    let greetUserBtn = document.getElementById("greetUserBtn");
    greetUserBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    let msgDiv = document.getElementById("msgDiv");
    let userName = document.getElementById("nameField");
    let name = userName.value;
    msgDiv.innerHTML = `Hello dear ${name}`;
}   
