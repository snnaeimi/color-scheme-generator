const testEl = document.getElementById("test");

fetch("https://www.thecolorapi.com/id?hex=0047AB&mode=analogic")
  .then((res) => res.json())
  .then((data) => {
    showHexColor(data);
  });

function showHexColor(data) {
  console.log(data.image.bare);
  testEl.innerHTML = `<img src="${data.image.bare}">`;
}
