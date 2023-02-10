var light = document.getElementById('light');
var dark = document.getElementById('dark');
var body = document.getElementsByTagName('body')[0];

light.onclick = function() {
    console.log("hey");
    body.classList.remove('dark');
    body.classList.add('light');
    dark.classList.remove('dark-active');
    light.classList.add('light-active');
}

dark.onclick = function() {
    body.classList.remove('light');
    body.classList.add('dark');
    light.classList.remove('light-active');
    dark.classList.add('dark-active');
}

var output = document.getElementById('calculatedAns');
function display(num) {
    output.value += num;
}

function Calculate() {
    try {
        output.value = eval(output.value);
    } catch {
        alert("Invalid Input")
    }
}

function Clear() {
    output.value = "";
}

function del() {
    output.value = output.value.slice(0,-1);
}