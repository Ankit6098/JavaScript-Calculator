var light = document.getElementById('light');
var dark = document.getElementById('dark');
light.onclick = function() {
    light.classList.light('active');
}
dark.onclick = function() {
    dark.classList.dark('active');
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