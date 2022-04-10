/**
 * Handle solution visibility (show/hide).
 * @param {string} elementId created with DIV tag.
 */
 function showSolution(elementId) {
     if(typeof elementId != 'string') {
        console.error("Element Id must not be null or empty.");
        return;
     }

     if(document.getElementById(elementId).style.display != "block") {
        document.getElementById(elementId).style.display = "block";
        document.getElementById("try_" + elementId).innerHTML = "Hide solution";

     } else {
        document.getElementById(elementId).style.display = "none";
        document.getElementById("try_" + elementId).innerHTML = "Try it";
     }
}

/**
 * Handle editor visibility.
 */
function showEditor() {
    if(document.getElementById("editor").style.display != '' && document.getElementById("editor").style.display == 'none') {
       document.getElementById("editor").style.display = "block";
       document.getElementById("editor_btn").innerHTML = "Hide Editor";
    } else {
       document.getElementById("editor").style.display = "none";
       document.getElementById("editor_btn").innerHTML = "Open Editor";
    }
}