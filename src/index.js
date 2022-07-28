// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function showTemp(event) {
  let button = document.querySelector("button");
  button.innerHTML = "18 degrees";
  //event.PreventDefault();
  //alert("It is 18 degrees.");
}

let showTempButton = document.querySelector("button");
showTempButton.addEventListener("click", showTemp);
