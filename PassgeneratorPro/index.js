

function generatePass(){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}


function passFunc(){

    let password = " "
    for(let i = 0 ; i < 14;i++){
        password += generatePass()
    }

    return password;
}

function setPass(){
    let box1 = document.getElementById("pass1")
    let box2 = document.getElementById("pass2")
    box1.textContent = passFunc() // here the text content of box1 is being changed to randomly generated password
    box2.textContent = passFunc()
}
