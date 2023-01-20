var slct1 = document.querySelector('#slct1');
slct1.options[slct1.selectedIndex].id;

var slct2 = document.querySelector('#slct2');
slct2.options[slct2.selectedIndex].id;

    let imgEle1 = "./img/" + slct1.value +'.png';
    let imgEle2 = "./img/" + slct2.value +'.png';
    let imgEle3 = "./img/" + slct3.value +'.png';
    let imgEle4 = document.querySelectorAll(".image")[3];
    let imgEle5 = document.querySelectorAll(".image")[4];
    let imgEle6 = "./img/" + slct6.value +'.png';
    let imgEle7 = "./img/" + slct7.value +'.png';
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

// function getBackground() {
//   selectElement = document.querySelector('#slct1');
//   output = selectElement.value;
//   document.querySelector('.output').textContent = output;
// }

// function getSkin() {
//   selectElement = document.querySelector('#slct2');
//   output = selectElement.value;
//   document.querySelector('.output').textContent = output;
// }

// get image from dropdown:
// const select = document.getElementById('image-category');
// const option = select.options[select.selectedIndex];
// const val = document.getElementById('imagename').value;
// const images = option.value == '8' ? 'Images' : 'images';

// const path = `www.example.com/Category-${option.value}/${images}/{$val}.png`;

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

// create filepath for Background
function createFilePathbg() {
  var select = document.getElementById("slct1");
  var selectedValue = select.options[select.selectedIndex].value;
  var filePathbg = "img/Background/" + selectedValue + ".png";
  return filePathbg;
}
// update image src for background
var select = document.getElementById("slct1");
select.addEventListener("change", function() {
    var filePathbg = createFilePathbg();
    var imgEle1 = document.getElementById("myImagebg");
    imgEle1.src = filePathbg
});

// create filepath for Skin
function createFilePathskin() {
  var select2 = document.getElementById("slct2");
  var selectedValue2 = select2.options[select2.selectedIndex].value;
  var filePathskin = "img/Body/" + selectedValue2 + ".png";
  return filePathskin;
}
// update image src for skin
var select2 = document.getElementById("slct2");
select2.addEventListener("change", function() {
    var filePathskin = createFilePathskin();
    var imgEle2 = document.getElementById("myImageskin");
    imgEle2.src = filePathskin
});

// create filepath for eyes
function createFilePatheyes() {
  var select3 = document.getElementById("slct3");
  var selectedValue3 = select3.options[select3.selectedIndex].value;
  var filePatheyes = "img/Eyes/" + selectedValue3 + ".png";
  return filePatheyes;
}
// update image src for eyes
var select3 = document.getElementById("slct3");
select3.addEventListener("change", function() {
    var filePatheyes = createFilePatheyes();
    var imgEle3 = document.getElementById("myImageeyes");
    imgEle3.src = filePatheyes
});

// create filepath for mouth
function createFilePathmouth() {
  var select4 = document.getElementById("slct4");
  var selectedValue4 = select4.options[select4.selectedIndex].value;
  var filePathmouth = "img/Mouth/" + selectedValue4 + ".png";
  return filePathmouth;
}
// update image src for mouth
var select4 = document.getElementById("slct4");
select4.addEventListener("change", function() {
    var filePathmouth = createFilePathmouth();
    var imgEle4 = document.getElementById("myImagemouth");
    imgEle4.src = filePathmouth
});

// create filepath for headwear
function createFilePathheadwear() {
  var select6 = document.getElementById("slct6");
  var selectedValue6 = select6.options[select6.selectedIndex].value;
  var filePathheadwear = "img/Headwear/" + selectedValue6 + ".png";
  return filePathheadwear;
}
// update image src for headwear
var select6 = document.getElementById("slct6");
select6.addEventListener("change", function() {
    var filePathheadwear = createFilePathheadwear();
    var imgEle6 = document.getElementById("myImageheadwear");
    imgEle6.src = filePathheadwear
});

// create filepath for eyewear
function createFilePatheyewear() {
  var select5 = document.getElementById("slct5");
  var selectedValue5 = select5.options[select5.selectedIndex].value;
  var filePatheyewear = "img/EyeWear/" + selectedValue5 + ".png";
  return filePatheyewear;
}
// update image src for eyewear
var select5 = document.getElementById("slct5");
select5.addEventListener("change", function() {
    var filePatheyewear = createFilePatheyewear();
    var imgEle5 = document.getElementById("myImageeyewear");
    imgEle5.src = filePatheyewear
});

// create filepath for shirt
function createFilePathshirt() {
  var select7 = document.getElementById("slct7");
  var selectedValue7 = select7.options[select7.selectedIndex].value;
  var filePathshirt = "img/Shirt/" + selectedValue7 + ".png";
  return filePathshirt;
}
// update image src for shirt
var select7 = document.getElementById("slct7");
select7.addEventListener("change", function() {
    var filePathshirt = createFilePathshirt();
    var imgEle7 = document.getElementById("myImageshirt");
    imgEle7.src = filePathshirt
});

// create filepath for accessory
function createFilePathaccessory() {
  var select8 = document.getElementById("slct8");
  var selectedValue8 = select8.options[select8.selectedIndex].value;
  var filePathaccessory = "img/Accessories/" + selectedValue8 + ".png";
  return filePathaccessory;
}
// update image src for accessory
var select8 = document.getElementById("slct8");
select8.addEventListener("change", function() {
    var filePathaccessory = createFilePathaccessory();
    var imgEle8 = document.getElementById("myImageaccessory");
    imgEle8.src = filePathaccessory
});