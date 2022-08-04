const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let parentElement = document.getElementById("passwords")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")


//  
function generatePasswords(){
    let password = document.createElement('div')                    // Creates a div element
    password.classList.add("password-el")                           // Adds a class to the div element
    password.textContent = passwordGenerator()                      // Generates the content to go into div element 
    document.getElementById('passwords').appendChild(password);     // Appends the newly created element to the parrent element
    
}

//  Generates a random 15 letter Password
function passwordGenerator(){
    let password = ''
    for (i = 0; i<15; i++){
        let randomIndex =  Math.floor(Math.random()*characters.length)
        let randomCharacter = characters[randomIndex]
        password += randomCharacter
    }
    return password
}

