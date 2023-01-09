
    let imgEle1 = document.querySelectorAll(".image")[0];
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