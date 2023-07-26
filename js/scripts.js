// constants for query selector
const myStudentId = document.querySelector("#myStudentId");
const customNumber = document.querySelector("#customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const images = document.querySelector("#images");

// function to change bg color based on a number
function changeBgColor(number) {
  // check which range the number falls into and change the background color accordingly
  if (number < 0 || number > 100) {
    document.body.style.backgroundColor = "red";
  } else if (number >= 0 && number <= 20) {
    document.body.style.backgroundColor = "green";
  } else if (number > 20 && number <= 40) {
    document.body.style.backgroundColor = "blue";
  } else if (number > 40 && number <= 60) {
    document.body.style.backgroundColor = "orange";
  } else if (number > 60 && number <= 80) {
    document.body.style.backgroundColor = "purple";
  } else if (number > 80 && number <= 100) {
    document.body.style.backgroundColor = "yellow";
  }
}

// function to change bg color from user input and add student id
function changeCustomColor() {
  // get the value of the customNumber input field
  let customNumberValue = customNumber.value;
  // call the changeBgColor function with the customNumberValue as an argument
  changeBgColor(customNumberValue);
  // display your student id in the p tag
  myStudentId.textContent = "0397037";
}

// function to change bg color from random no.
function changeRandomColor() {
  // generate a random number between 0 and 100
  let randomNumber = Math.floor(Math.random() * 101);
  // call the changeBgColor function with the randomNumber as an argument
  changeBgColor(randomNumber);
}

// function to generate options for select list
function addList() {
  // array of image options
  let imageOptions = ["Image1", "Image2", "Image3", "Image4", "Image5"];
  // check if options have already been added to prevent duplicates
  if (imageSelect.options.length === 1) {
    // loop through the imageOptions array and add each option to the select list
    for (let i = 0; i < imageOptions.length; i++) {
      let option = document.createElement("option");
      option.text = imageOptions[i];
      option.value = imageOptions[i];
      imageSelect.add(option);
    }
  }
}

// function to change image
function changeImage() {
  // get the value of the selected option in the select list
  let selectedOption = imageSelect.value;
  // check which option was selected and change the src attribute of the img element accordingly
  switch (selectedOption) {
    case "Image1":
      images.src = "img/img1.jpg";
      break;
    case "Image2":
      images.src = "img/img2.jpg";
      break;
    case "Image3":
      images.src = "img/img3.jpg";
      break;
    case "Image4":
      images.src = "img/img4.jpg";
      break;
    case "Image5":
      images.src = "img/img5.jpg";
      break;
    default:
      images.src = "";
      break;
  }
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
