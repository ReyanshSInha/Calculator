let evaluation = ""

let symbols = ["+", "-", "*", "/", "%"]
// selection of all the keys

//numbers
const text = document.querySelector("#inputValue")
const button1 = document.querySelector("#one")
const button2 = document.querySelector("#two")
const button3= document.querySelector("#three")
const button4 = document.querySelector("#four")
const button5 = document.querySelector('#five')
const button6 = document.querySelector("#six")
const button7 = document.querySelector("#seven")
const button8 = document.querySelector("#eight")
const button9 = document.querySelector("#nine")
const zero = document.querySelector("#zero")

// operators
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const modulo = document.querySelector("#modulo")

// deletion functions
const allClear = document.querySelector("#AC")
const clear = document.querySelector("#C")

//equals and dot
const dot = document.querySelector("#dot")
const equal = document.querySelector("#equals")


// number display functionality

button1.addEventListener('click', () => {
    text.textContent += "1"
    evaluation += "1"
})

button2.addEventListener('click', () => {
    text.textContent += "2"
    evaluation += "2"

})

button3.addEventListener('click', () => {
    text.textContent += "3"
    evaluation += "3"

})

button4.addEventListener('click', () => {
    text.textContent += "4"
    evaluation += "4"

})

button5.addEventListener("click", () => {
    text.textContent += "5"
    evaluation += "5"
})

button6.addEventListener("click", () => {
    text.textContent += "6"
    evaluation += "6"
})

button7.addEventListener("click", () => {
    text.textContent += "7"
    evaluation += "7"
})

button8.addEventListener("click", () => {
    text.textContent += "8"
    evaluation += "8"
})

button9.addEventListener("click", () => {
    text.textContent += "9"
    evaluation += "9"
})

zero.addEventListener("click", () => {
    text.textContent += "0"
    evaluation += "0"
})


// operator display functionality

plus.addEventListener('click', ()=>{

    switch(true){
        case evaluation.toString().includes("+"):
            
            break;
        
        case evaluation.toString().includes("-"):
            
            break;
        
        case evaluation.toString().includes("*"):
          
            break;
        
        case evaluation.toString().includes("/"):
           
            break;

        case evaluation.toString().includes("%"):
           
            break;

        default:
            text.textContent += "+"    
            evaluation += "+"

    }
    
})

minus.addEventListener("click", ()=>{
    switch(true){
        case evaluation.toString().includes("+"):
            
            break;
        
        case evaluation.toString().includes("-"):
            
            break;
        
        case evaluation.toString().includes("*"):
          
            break;
        
        case evaluation.toString().includes("/"):
           
            break;

        case evaluation.toString().includes("%"):
           
            break;

        default:
            text.textContent += "-"    
            evaluation += "-"

    }
})

multiply.addEventListener("click", ()=>{
    switch(true){
        case evaluation.toString().includes("+"):
            
            break;
        
        case evaluation.toString().includes("-"):
            
            break;
        
        case evaluation.toString().includes("*"):
          
            break;
        
        case evaluation.toString().includes("/"):
           
            break;

        case evaluation.toString().includes("%"):
           
            break;

        default:
            text.textContent += "x"    
            evaluation += "*"

    }
})

divide.addEventListener("click", ()=>{
    

    switch(true){
        case evaluation.toString().includes("+"):
            
            break;
        
        case evaluation.toString().includes("-"):
            
            break;
        
        case evaluation.toString().includes("*"):
          
            break;
        
        case evaluation.toString().includes("/"):
           
            break;

        case evaluation.toString().includes("%"):
           
            break;

        default:
            text.textContent += "÷"  
            evaluation += "/"

    }
})

modulo.addEventListener("click", () =>{
    switch(true){
        case evaluation.toString().includes("+"):
            
            break;
        
        case evaluation.toString().includes("-"):
            
            break;
        
        case evaluation.toString().includes("*"):
          
            break;
        
        case evaluation.toString().includes("/"):
           
            break;

        case evaluation.toString().includes("%"):
           
            break;

        default:
            text.textContent += "%"  
            evaluation += "%"

    }
})


// equals and dot

dot.addEventListener("click", () => {
    text.textContent += "."
    evaluation += "."
})

equal.addEventListener('click', () => {

    switch(true){
        case evaluation.includes("+"):
            let sepPlus = evaluation.split("+")
            let answerPlus = parseFloat(sepPlus[0]) + parseFloat(sepPlus[1])
           
            text.textContent = answerPlus.toFixed(2)
            evaluation = answerPlus.toFixed(2)
            break;
        
        case evaluation.includes("-"):
            let sepMinus = evaluation.split("-")
            let answerMinus = parseFloat(sepMinus[0]) - parseFloat(sepMinus[1])
            text.textContent = answerMinus.toFixed(2)
            
            evaluation = answerMinus.toFixed(2)
            break;
        
        case evaluation.includes("*"):
            let sepMultiply = evaluation.split("*")
            let answerMultiply = parseFloat(sepMultiply[0]) * parseFloat(sepMultiply[1])
            text.textContent = answerMultiply.toFixed(2)
            
            evaluation = answerMultiply.toFixed(2)
            break;
        
        case evaluation.includes("/"):
            let sepDivide = evaluation.split("/")
            let answerDivide = parseFloat(sepDivide[0]) / parseFloat(sepDivide[1])
            text.textContent = answerDivide.toFixed(2)
            
            evaluation = answerDivide.toFixed(2)
            break;

        case evaluation.includes("%"):
            let sepModulo = evaluation.split("%")
            let answerModulo = parseInt(sepModulo[0]) % parseInt(sepModulo[1])
            text.textContent = answerModulo.toFixed(2)
            
            evaluation = answerModulo.toFixed(2)
            break;

    }

    

})

// deletion functions

allClear.addEventListener("click", ()=>{
    text.textContent = ""
    evaluation = ""
})


// build the clear function

clear.addEventListener("click", ()=>{
    
    let evaArray = evaluation.toString().split("")
    evaArray.pop()
    text.textContent = evaArray.join("")
    evaluation = evaArray.join("")
    
})



