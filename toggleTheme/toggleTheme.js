//switch between light Mode and dark Mode
//disabling related scripts
//<link rel="stylesheet" href="lightMode.css" id="light-mode">
//<link rel="stylesheet" href="darkMode.css" id="dark-mode">

function ToggleMode() {
  let lightMode = document.querySelector("#light-mode");
  let darkMode = document.querySelector("#dark-mode");
  
  if(darkMode.disabled) {
    lightMode.disabled = true;
    darkMode.disabled = false;
  } else {
    lightMode.disabled = false;
    darkMode.disabled = true;
  }
}
