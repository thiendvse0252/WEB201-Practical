function upDate(image) {
    document.getElementById('image').style.backgroundImage = "url(" + image.src + ")";
    document.getElementById('image').innerHTML = image.alt;
}

function unDo() {
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
}