const colorCode = [
  "#f6e58d",
  "#ffbe76",
  "#ff7979",
  "#badc58",
  "#dff9fb",
  "#f9ca24",
  "#f0932b",
  "#eb4d4b",
  "#f9ca24",
  "#6ab04c",
  "#c7ecee",
  "#95afc0",
  "#130f40",
  "#4834d4",
  "#686de0",
  "#be2edd",
  "#7ed6df",
  "#22a6b3",
  "#e056fd",
  "#535c68",
]
const box = document.getElementsByClassName("color-box");
for (let i = 0; i < box.length; i++) {
  const element = box[i];
  for (let i = 0; i < colorCode.length; i++) {
    box[i].style.backgroundColor = colorCode[i];
    var codeSpan = document.getElementsByClassName("code-color");
    for (let i = 0; i < codeSpan.length; i++) {
      codeSpan[i].innerText = colorCode[i];
    }
  }
  element.addEventListener("click", function(event) {
    function colorCodeCopy() {
      var copyText = event.target.style.backgroundColor;
      navigator.clipboard.writeText(copyText);
      alert("Copied the text: " + copyText);
    }
    colorCodeCopy()

  })
}
