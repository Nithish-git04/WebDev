// window.alert("Hello from JS!");

function submitted() {
    document.getElementById("feedback_form").onsubmit = function() {
        alert("Thank you for your feedback!");
        return false;
    }
}

console.log("This is a console log message from JS!");