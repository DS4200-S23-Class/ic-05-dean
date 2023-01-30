function updateButton() {
    let text = document.getElementById("buttonUpdate").innerHTML;
    const textArray = text.split(" ");
    textArray[textArray.length - 1]++;
    
    document.getElementById("buttonUpdate").innerHTML = textArray.join(" ");
  }