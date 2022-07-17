let firstThemeBtn = document.querySelector(".theme-one-btn");
let secondThemeBtn = document.querySelector(".theme-two-btn");
let thirdThemeBtn = document.querySelector(".theme-three-btn");
let titleText = document.querySelector(".title");
let themeText = document.querySelector(".theme");
let toggleNumberText = document.getElementById("theme-number-text");
let toggleBtnContainer = document.querySelector(".theme-button-container");
let display = document.querySelector(".display");
let gridContainer = document.querySelector(".grid-container");
let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll(".operation");
let delButton = document.querySelector(".delete");
let resetButton = document.querySelector(".reset-btn");
let resultButton = document.querySelector(".result-btn");
let prevDataText = document.querySelector(".prev-data");
let currDataText = document.querySelector(".curr-data");
const keys = document.querySelector(".grid-container");




function themeThree() {
    firstThemeBtn.style.opacity = "0";
    secondThemeBtn.style.opacity = "0";
    thirdThemeBtn.style.opacity = "1";
    thirdThemeBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    gridContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggleBtnContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
    delButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    delButton.style.boxShadow = "0rem 0.2rem hsl(285, 91%, 52%)"
    resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.boxShadow = "0rem 0.2rem hsl(285, 91%, 52%)"
    resultButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    resultButton.style.color = "hsl(198, 20%, 13%)"
    resultButton.style.boxShadow = "0rem 0.2rem hsl(177, 92%, 70%)"
    display.style.color = "hsl(52, 100%, 62%)"
    themeText.style.color = "hsl(52, 100%, 62%)"
    toggleNumberText.style.color = "hsl(52, 100%, 62%)"
    titleText.style.color = "hsl(52, 100%, 62%)"
    numButtons.forEach(el => el.style.backgroundColor = "hsl(268, 47%, 21%)");
    numButtons.forEach(el => el.style.color = "hsl(52, 100%, 62%)");
    numButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(290, 70%, 36%)");
    opButtons.forEach(el => el.style.backgroundColor = "hsl(268, 47%, 21%)");
    opButtons.forEach(el => el.style.color = "hsl(52, 100%, 62%)");
    opButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(290, 70%, 36%)");

    numButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "hsl(268, 53%, 25%)";
        })
    })



    numButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(290, 70%, 36%)";
            el.style.backgroundColor = "hsl(268, 47%, 21%)";
        })
    })

    resultButton.addEventListener("mousedown", () => {
        resultButton.style.boxShadow = "none";
        resultButton.style.backgroundColor = "hsl(176, 100%, 49%)";
    })

    resultButton.addEventListener("mouseup", () => {
        resultButton.style.boxShadow = "0rem 0.2rem hsl(177, 92%, 70%)";
        resultButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    })

    resetButton.addEventListener("mousedown", () => {
        resetButton.style.boxShadow = "none";
        resetButton.style.backgroundColor = "hsl(281, 94%, 31%)";
    })

    resetButton.addEventListener("mouseup", () => {
        resetButton.style.boxShadow = "0rem 0.2rem hsl(285, 91%, 52%)";
        resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    })

    delButton.addEventListener("mousedown", () => {
        delButton.style.boxShadow = "none";
        delButton.style.backgroundColor = "hsl(281, 94%, 31%)"
    })

    delButton.addEventListener("mouseup", () => {
        delButton.style.boxShadow = "0rem 0.2rem hsl(285, 91%, 52%)";
        delButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    })

    opButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "hsl(268, 53%, 26%)"
        })
    })

    opButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(290, 70%, 36%)";
            el.style.backgroundColor = "hsl(268, 47%, 21%)";
        })
    })
}


function themeTwo() {
    firstThemeBtn.style.opacity = "0";
    secondThemeBtn.style.opacity = "1";
    thirdThemeBtn.style.opacity = "0";
    secondThemeBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    gridContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
    toggleBtnContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
    delButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    delButton.style.boxShadow = "0rem 0.2rem hsl(185, 58%, 25%)"
    resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetButton.style.boxShadow = "0rem 0.2rem hsl(185, 58%, 25%)"
    resultButton.style.backgroundColor = "hsl(25, 98%, 40%)";
    resultButton.style.color = "white";
    resultButton.style.boxShadow = "0rem 0.2rem hsl(25, 99%, 27%)"
    display.style.color = "#3C3C32"
    themeText.style.color = "#3C3C32"
    toggleNumberText.style.color = "#3C3C32"
    titleText.style.color = "#3C3C32"
    numButtons.forEach(el => el.style.backgroundColor = "hsl(45, 7%, 89%)");
    numButtons.forEach(el => el.style.color = "#3C3C32")
    numButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(35, 11%, 61%)");
    opButtons.forEach(el => el.style.backgroundColor = " hsl(45, 7%, 89%)");
    opButtons.forEach(el => el.style.color = "#3C3C32")
    opButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(35, 11%, 61%)");

    numButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "hsl(45, 14%, 96%)";
        })
    })

    numButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(35, 11%, 61%)";
            el.style.backgroundColor = "hsl(45, 7%, 89%)";
        })
    })

    
    resultButton.addEventListener("mousedown", () => {
        resultButton.style.boxShadow = "none";
        resultButton.style.backgroundColor = "hsl(25, 100%, 45%)";
    })

    resultButton.addEventListener("mouseup", () => {
        resultButton.style.boxShadow = "0rem 0.2rem hsl(25, 99%, 27%)";
        resultButton.style.backgroundColor = "hsl(25, 98%, 40%)";
    })

    resetButton.addEventListener("mousedown", () => {
        resetButton.style.boxShadow = "none";
        resetButton.style.backgroundColor = "hsl(185, 47%, 42%)"
    })

    resetButton.addEventListener("mouseup", () => {
        resetButton.style.boxShadow = "0rem 0.2rem hsl(185, 58%, 25%)";
        resetButton.style.backgroundColor = "hsl(185, 42%, 37%)"
    })

    delButton.addEventListener("mousedown", () => {
        delButton.style.boxShadow = "none";
        delButton.style.backgroundColor = "hsl(185, 47%, 42%)"
    })

    delButton.addEventListener("mouseup", () => {
        delButton.style.boxShadow = "0rem 0.2rem hsl(185, 58%, 25%)";
        delButton.style.backgroundColor = "hsl(185, 42%, 37%)"
    })

    opButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "hsl(45, 14%, 96%)";
        })
    })

    opButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(35, 11%, 61%)";
            el.style.backgroundColor = "hsl(45, 7%, 89%)";
        })
    })
}

function themeOne() {
    firstThemeBtn.style.opacity = "1";
    secondThemeBtn.style.opacity = "0";
    thirdThemeBtn.style.opacity = "0";
    firstThemeBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    gridContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
    toggleBtnContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
    delButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    delButton.style.boxShadow = "0rem 0.2rem hsl(224, 28%, 35%)"
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.boxShadow = "0rem 0.2rem hsl(224, 28%, 35%)"
    resultButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    resultButton.style.color = "white";
    resultButton.style.boxShadow = "0rem 0.2rem hsl(6, 70%, 34%)"
    display.style.color = "white"
    themeText.style.color = "white"
    toggleNumberText.style.color = "white"
    titleText.style.color = "white"
    numButtons.forEach(el => el.style.backgroundColor = "hsl(30, 25%, 89%)");
    numButtons.forEach(el => el.style.color = "hsl(221, 14%, 31%)")
    numButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(28, 16%, 65%)");
    opButtons.forEach(el => el.style.backgroundColor = " hsl(30, 25%, 89%)");
    opButtons.forEach(el => el.style.color = "hsl(221, 14%, 31%)")
    opButtons.forEach(el => el.style.boxShadow = "0rem 0.2rem hsl(28, 16%, 65%)");

    numButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "white";
        })
    })

    numButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(28, 16%, 65%)";
            el.style.backgroundColor = "hsl(30, 25%, 89%)";
        })
    })

    
    resultButton.addEventListener("mousedown", () => {
        resultButton.style.boxShadow = "none";
        resultButton.style.backgroundColor = "hsl(6, 79%, 58%)";
    })

    resultButton.addEventListener("mouseup", () => {
        resultButton.style.boxShadow = "0rem 0.2rem hsl(6, 70%, 34%)";
        resultButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    })

    resetButton.addEventListener("mousedown", () => {
        resetButton.style.boxShadow = "none";
        resetButton.style.backgroundColor = "hsl(225, 32%, 60%)";
    })

    resetButton.addEventListener("mouseup", () => {
        resetButton.style.boxShadow = "0rem 0.2rem hsl(224, 28%, 35%)";
        resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    })

    delButton.addEventListener("mousedown", () => {
        delButton.style.boxShadow = "none";
        delButton.style.backgroundColor = "hsl(225, 32%, 60%)";
    })

    delButton.addEventListener("mouseup", () => {
        delButton.style.boxShadow = "0rem 0.2rem hsl(224, 28%, 35%)";
        delButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    })

    opButtons.forEach(el => {
        el.addEventListener("mousedown", () =>{
            el.style.boxShadow = "none";
            el.style.backgroundColor = "white"
        })
    })

    opButtons.forEach(el => {
        el.addEventListener("mouseup", () =>{
            el.style.boxShadow = "0rem 0.2rem hsl(28, 16%, 65%)";
            el.style.backgroundColor = "hsl(30, 25%, 89%)";
        })
    })
}



display.value = "0";



keys.addEventListener("click", e => {
   const{target} = e;

   if (!target.matches("button")) {
    return;
   }

  

   if(target.dataset.operation) {
        display.value = display.value + target.value;
   }

   if (target.dataset.decimal) {
        display.value = display.value + target.value;
   }

   if (target.dataset.reset) {
        display.value = "0";
   }

   if (target.dataset.delete) {
        display.value = display.value.slice(0, -1);
   }

   if (target.dataset.number) {
        if (display.value === "0"){
            display.value = target.value;
        }else {display.value=display.value + target.value}
   }

   if (target.dataset.calculate) {
       result = String(parseFloat(eval(display.value).toFixed(8)));
       display.value = result;

       if (isNaN(display.value)) {
            display.value = "syntax error";
       }
   }

  
   updateDisplay(); 
})










