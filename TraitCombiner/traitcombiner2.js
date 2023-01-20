var slct1 = document.querySelector('#slct1');
slct1.options[slct1.selectedIndex].id;

    let imgEle1 = "./img/" + slct1.value +'.png';
    let imgEle2 = document.querySelectorAll(".image")[1];
    let imgEle3 = document.querySelectorAll(".image")[2];
    let imgEle4 = document.querySelectorAll(".image")[3];
    let imgEle5 = document.querySelectorAll(".image")[4];
    let resEle = document.querySelector(".result");
    var context = resEle.getContext("2d");
    let generateEle = document.querySelector(".generate");
    generate.addEventListener("click", () => {
    resEle.width = imgEle1.width;
        resEle.height = imgEle1.height;
        context.globalAlpha = 1.0;
        context.drawImage(imgEle1, 0, 0);
        context.globalAlpha = 1;
        context.drawImage(imgEle2, 0, 0);
        context.globalAlpha = 1;
        context.drawImage(imgEle3, 0, 0);
        context.globalAlpha = 1;
        context.drawImage(imgEle4, 0, 0);
        context.globalAlpha = 1;
        context.drawImage(imgEle5, 0, 0);
    });

// round 3 output test

function getBackground() {
  selectElement = document.querySelector('#slct1');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}

function getSkin() {
  selectElement = document.querySelector('#slct2');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}

// Create a JavaScript function that returns the file path that you want to display
function getImageUrl() {
  return "img/DesertSand.png";
}

// Use JavaScript to access the image element by its ID, and set its "src" attribute to the URL or file path returned by the function
var img = document.getElementById("myImage");
img.src = getImageUrl();

// gety image first try
document.getElementById('btn').onclick = function() {
  var val = document.getElementById('imagename').value,
      src = "./img/" + val +'.png',
      img = document.createElement('img');
      img.src = src;
img.setAttribute('width', '190px');
img.setAttribute('height', '190px');
      document.body.appendChild(img);
}
// get image from dropdown:
const select = document.getElementById('image-category');
const option = select.options[select.selectedIndex];
const val = document.getElementById('imagename').value;
const images = option.value == '8' ? 'Images' : 'images';

const path = `www.example.com/Category-${option.value}/${images}/{$val}.png`;

//token gate what is available in dropdown:
function populate (s1,s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  // if statement below will be replaced with token gating code
  // if(s1.value == "Chevy") {
  //   var optionArray = ["|", "camaro|Camaro"];
  // }
//left of the | is the value, to the right is the label
  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}