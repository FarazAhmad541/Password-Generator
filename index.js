const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const withoutChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const withoutNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let isNumbers = false;
let isChar = false;
let passwordLengthEl = document.getElementById('range')

// let passwordLength = 15





function generatePasswords(){
    passwordLength = passwordLengthEl.value
    if (passwordLength > 8 && passwordLength<30){
        let password = passwordGenerator2()
        let passwordEl = `<div class = "password-el" id = "password-el" onclick = "handleCopyText()">
                        ${password}
                        </div>`                       
        document.getElementById('passwords').innerHTML = passwordEl     // Appends the newly created element to the parrent element
    }else{
        alert('Password length should be 8 to 30 characters')
    }
    
        
}

function toggleSwitch(){
    let checkNumber = document.getElementById('check-number')
    let checkCharacter = document.getElementById('check-character')
    
    if(checkNumber.checked === true){
        isNumbers = true
    }else if(checkNumber.checked === false){
        isNumbers = false
    }
    if(checkCharacter.checked === true){
        isChar = true
    }else if(checkCharacter.checked === false){
        isChar = false
    }
    return isChar, isNumbers
}


function passwordGenerator2(){
    let password = ''
    if (isNumbers === false && isChar === false){
        for (i = 0; i<passwordLength; i++){
            let randomIndex =  Math.floor(Math.random()*charOnly.length)
            let randomCharacter = charOnly[randomIndex]
            password += randomCharacter
        }

        }else if(isNumbers === true && isChar === false){
            for (i = 0; i<passwordLength; i++){
                let randomIndex =  Math.floor(Math.random()*withoutChar.length)
                let randomCharacter = withoutChar[randomIndex]
                password += randomCharacter
            }
        }else if(isNumbers === false && isChar === true){
            for (i = 0; i<passwordLength; i++){
                let randomIndex =  Math.floor(Math.random()*withoutNum.length)
                let randomCharacter = withoutNum[randomIndex]
                password += randomCharacter
            }
        }else if(isNumbers === true && isChar === true){
            for (i = 0; i<passwordLength; i++){
                let randomIndex =  Math.floor(Math.random()*characters.length)
                let randomCharacter = characters[randomIndex]
                password += randomCharacter  
            }
        
        }
    return password
}

function handleCopyText() {
    const cb = navigator.clipboard;
    const passwordText = document.querySelector('.password-el');
    cb.writeText(passwordText.innerText).then(() => alert('Password is copied to clipboard'));
  }



