console.log("scripts running");

function paintRead() {
  let letters = document.querySelectorAll(".plant-attr-number .small");

  for (let i = 0; i < letters.length; i++) {
    letters[i].style.setProperty("font-size", "32px", "important");

    if (parseFloat(letters[i].innerHTML) > 100) {
      letters[i].style.color = "red";
    } else {
      letters[i].style.color = "green";
    }
  }

  let background = document.querySelectorAll(".plant-attr-number");
  for (let i = 0; i < background.length; i++) {
    background[i].style.background = "none";
  }

  let tear = document.querySelectorAll(".tool-icon");
  for (let i = 0; i < tear.length; i++) {
    tear[i].style.display = "none";
  }
}

setInterval(paintRead, 500);
