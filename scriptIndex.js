    /* ---------------- T H E M E   S W I T C H   S C R I P T ---------------- */

var themeRange = document.querySelector("#themeConfig");
var root = document.querySelector(":root");

themeRange.addEventListener("click", updateRangeValue);

function updateRangeValue(element){

    var range = +element.value;

    switch(range){

        /* ----- THEME 1 ----- */

        case 0:

            /* BODY COLORS */

            root.style.setProperty("--backgroundPrimary", "hsl(222, 26%, 31%)");
            root.style.setProperty("--themeConfig", "hsl(223, 31%, 20%)");
            root.style.setProperty("--themeConfigThumb", "hsl(6, 63%, 50%)");
            root.style.setProperty("--backgroundIO", "hsl(224, 36%, 15%)");
            root.style.setProperty("--backgroundKeypad", "hsl(223, 31%, 20%)");
            root.style.setProperty("--buttonIO", "hsl(30, 25%, 89%)");
            root.style.setProperty("--buttonDeleteReset", "hsl(225, 21%, 49%)");
            root.style.setProperty("--buttonEquals", "hsl(6, 63%, 50%)");

            /* TYPOGRAPHY COLORS */

            root.style.setProperty("--header", "hsl(0, 0%, 100%)");
            root.style.setProperty("--io", "hsl(0, 0%, 100%)");
            root.style.setProperty("--keypadIO", "hsl(221, 14%, 31%)");
            root.style.setProperty("--keypadConfigButtons", "hsl(0, 0%, 100%)");
            root.style.setProperty("--equalsButton", "hsl(0, 0%, 100%)");

            /* SHADOW COLORS */

            root.style.setProperty("--shadowIO", "hsl(28, 16%, 65%)");
            root.style.setProperty("--shadowDelRes", "hsl(224, 28%, 35%)");
            root.style.setProperty("--shadowEq", "hsl(6, 70%, 34%)");

        break;

        /* ----- THEME 2 ----- */

        case 50:
            
            /* BODY COLORS */

            root.style.setProperty("--backgroundPrimary", "hsl(0, 0%, 90%)");
            root.style.setProperty("--themeConfig", "hsl(0, 5%, 81%)");
            root.style.setProperty("--themeConfigThumb", "hsl(25, 98%, 40%)");
            root.style.setProperty("--backgroundIO", "hsl(0, 0%, 93%)");
            root.style.setProperty("--backgroundKeypad", "hsl(0, 5%, 81%");
            root.style.setProperty("--buttonIO", "hsl(45, 7%, 89%)");
            root.style.setProperty("--buttonDeleteReset", "hsl(185, 42%, 37%)");
            root.style.setProperty("--buttonEquals", "hsl(25, 98%, 40%)");

            /* TYPOGRAPHY COLORS */

            root.style.setProperty("--header", "hsl(60, 10%, 19%)");
            root.style.setProperty("--io", "hsl(60, 10%, 19%)");
            root.style.setProperty("--keypadIO", "hsl(60, 10%, 19%)");
            root.style.setProperty("--keypadConfigButtons", "hsl(0, 0%, 100%)");
            root.style.setProperty("--equalsButton", "hsl(0, 0%, 100%)");

            /* SHADOW COLORS */

            root.style.setProperty("--shadowIO", "hsl(35, 11%, 61%)");
            root.style.setProperty("--shadowDelRes", "hsl(185, 58%, 25%)");
            root.style.setProperty("--shadowEq", "hsl(25, 99%, 27%)");

        break;

        /* ----- THEME 3 ----- */

        case 100:
            
            /* BODY COLORS */

            root.style.setProperty("--backgroundPrimary", "hsl(268, 75%, 9%)");
            root.style.setProperty("--themeConfig", "hsl(268, 71%, 12%)");
            root.style.setProperty("--themeConfigThumb", "hsl(176, 100%, 44%)");
            root.style.setProperty("--backgroundIO", "hsl(268, 71%, 12%)");
            root.style.setProperty("--backgroundKeypad", "hsl(268, 71%, 12%)");
            root.style.setProperty("--buttonIO", "hsl(268, 47%, 21%)");
            root.style.setProperty("--buttonDeleteReset", "hsl(281, 89%, 26%)");
            root.style.setProperty("--buttonEquals", "hsl(176, 100%, 44%)");

            /* TYPOGRAPHY COLORS */

            root.style.setProperty("--header", "hsl(52, 100%, 62%)");
            root.style.setProperty("--io", "hsl(52, 100%, 62%)");
            root.style.setProperty("--keypadIO", "hsl(52, 100%, 62%)");
            root.style.setProperty("--keypadConfigButtons", "hsl(0, 0%, 100%)");
            root.style.setProperty("--equalsButton", "hsl(198, 20%, 13%)");

            /* SHADOW COLORS */

            root.style.setProperty("--shadowIO", "hsl(290, 70%, 36%)");
            root.style.setProperty("--shadowDelRes", "hsl(285, 91%, 52%)");
            root.style.setProperty("--shadowEq", "hsl(177, 92%, 70%)");

        break;
        
    }

}

    /* ----------------   I N P U T   S C R I P T S   ---------------- */

    /* Keypad & Screen Variables */

    var screen = document.querySelector("#input-outputArea");
    var inputKeys = document.querySelectorAll(".buttonInput");
    console.log(inputKeys);
    var result = screen.innerText;
    var operatorCheck = new Boolean(false);
    var floatCheck = new Boolean(false);
    var zero = document.querySelector("#buttonZero");
    var one = document.querySelector("#buttonOne");
    var two = document.querySelector("#buttonTwo");
    var three = document.querySelector("#buttonThree");
    var four = document.querySelector("#buttonFour");
    var five = document.querySelector("#buttonFive");
    var six = document.querySelector("#buttonSix");
    var seven = document.querySelector("#buttonSeven");
    var eight = document.querySelector("#buttonEight");
    var nine = document.querySelector("#buttonNine");
    var plus = document.querySelector("#buttonPlus");
    var minus = document.querySelector("#buttonMinus");
    var times = document.querySelector("#buttonMultiplication");
    var divide = document.querySelector("#buttonDivision");
    var equals = document.querySelector("#buttonEquals");
    var del = document.querySelector("#buttonDelete");
    var reset = document.querySelector("#buttonReset");
    var point = document.querySelector("#buttonPoint");


    /* Input Scripts */

    inputKeys.forEach((inputKey)=>{
        inputKey.addEventListener("click", (inputEvent)=>{
            if(inputKey.classList.contains("buttonNumeric")){
                logInput(inputKey);
            }
            if(!(inputKey.classList.contains("buttonNumeric")) && inputKey.innerText != result[result.length-1]){
                logInput(inputKey);
            }
            
        })
    })

    var lengthCheck;
    del.addEventListener("mouseup", (checkLast)=>{
        if(screen.innerText.length == 1){
            lengthCheck = true;
        }
    })
    
    function logInput(key){
            /* Floating Point Numbers */
            if(key.id == "buttonPoint"){
                if(floatCheck == false){
                    screen.innerText += key.innerText;
                    floatCheck = true;
                    operatorCheck = false;
                }
            /* Delete */
            }else if(key.id == "buttonDelete"){
                if(lengthCheck == true){
                    screen.innerText = "0";
                }else{
                var resultArray = Array.from(result);
                resultArray.pop();
                result = resultArray.join("");
                screen.innerText = result;                    
                }
            }
            /* First Numeric Input */
            else if(key.classList.contains("buttonNumeric") && screen.innerText == "0"){
                screen.innerText = key.innerText;
                result = screen.innerText;
            /* Non-Consecutive Operator Input */
            }else if(key.classList.contains("buttonOperator") && operatorCheck == false){
                screen.innerText += key.innerText;
                operatorCheck = true;
                result = screen.innerText;
            /* Conecutive Operator Input */
            }else if(key.classList.contains("buttonOperator") && operatorCheck == true){
                operatorCheck = true;
                result = screen.innerText;
            }
            /* Other Inputs */
            else{
            screen.innerText += key.innerText;
            operatorCheck = false;
            result = screen.innerText;
            }

            /* Reset */
            reset.addEventListener("click", (reset)=>{
                screen.innerText = 0;
                operatorCheck = false;
                floatCheck = false;
                result = screen.innerText;
            });

            /* Multiplication Operator Symbol Replacement */
            times.addEventListener("click", (replaceAsteriskWithCross)=>{

            })

    }

    /* ----------------   C A L C U L A T I O N   S C R I P T S   ---------------- */
    
    equals.addEventListener("click", (calculate)=>{
        var final = result.replace("X", "*");
        screen.innerText = eval(final);
    })