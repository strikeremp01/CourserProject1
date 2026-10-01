function upDate(previewPic) {
  console.log("Mouse over image event triggered");
  console.log("Image alt text:", previewPic.alt);
  console.log("Image source URL:", previewPic.src);
  let displayDiv = document.getElementById("image");
  displayDiv.innerHTML = previewPic.alt;
  displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let displayDiv = document.getElementById("image");
  displayDiv.style.backgroundImage = "url('')";
  displayDiv.innerHTML = "Hover over an image below to display here.";
}