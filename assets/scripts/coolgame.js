/****
Setup
****/
document.getElementsByTagName('head')
[0].appendChild(document.createElement('script')).setAttribute('src','https://cdn.jsdelivr.net/gh/pikapower9080/pikapower9080.github.io/assets/modules/utils.js');
var pMHp, pHp, pIn, response, pName, pXp, pAtk, pDef, win;
pMHp = 12;
pHp  = 12;
/****
Story
****/
response = putils.forcePrompt("Start Game (y/n)?", "y", "Enter a valid answer.");
pName = putils.forcePrompt("What is your name, adventurer?", "Link", "Enter a valid answer.");
alert(`${pName} wakes up in a dark room.`);
if (putils.forcePrompt(`${pName} sees a strange device. Pick it up (y/n)?`, "y", "Enter a valid answer.") == "y") {
    pickUp("Sheikah Slate", "magic", null);
    alert(`${pName} walks out of the room and into the sunlight`);
    if (forcePrompt(`${pName} sees a stick. Pick it up (y/n)?`) == "y"){
        pickUp("Stick", "atk", 2);
        alert(`Great! Now ${pName} has a weapon!`);
    } else { alert(`Oh well. ${pName} will probably find another soon.`); }
    alert(`${pName} hears a rustling in the woods.`);
    defEnemy("Red Boko", 6, 0, item("Boko Club", "atk", 6));
    defEnemy("Keese" , 1, 0, [item("Keese Wing", "item", null), item("Keese Eye", "item", null)]);
} else {
    damage(999999999999999999999999999999999, `${pName} didn't pick up the device, and it killed ${pName} with magic.`, "p")
}
/********
FUNCTIONS
********/
function battle(eName, eHp, eMHp, eAtk, eDef, eDrop, eXp) {
    //Start
    win = null;
    alert(`A ${eName} has attacked! It has ${eAtk} atk and ${eDef} def.`);
    while (!win) {
        //Enemy Attack
        damage(calcAtk(eAtk, pDef), `${eName} attacks, doing ${calcAtk(eAtk, pDef)} damage. ${pName} is now at ${pHp}/${pMHp} health.`, "p");
        if (win) {
            //Player Dead
        }
        response = forcePrompt(`What does ${pName} want to do? (Atk/Item)`);
        if (response == "Atk"){
            //Player attacks
            
            damage(calcAtk(pAtk, eDef), `${pName} attacks, doing ${calcAtk(pAtk, eDef)} damage. ${eName} is now at ${eHp}/${eMHp} health.`, "e");
            if (win) {
                //Enemy Dead
                alert(`You killed the ${eName}!`);
                pickUp(eDrop.name, eDrop.type, eDrop.stat);
                getXp(eXp);
            }
        } else if(response == "item") {
            var text = "";
            for(let ind = 0; ind<pIn.length; ind++){
                text = text + "(" + ind + "): " + pIn[ind].name + "\n";
            }
            putils.forcePrompt("Choose an item: \n\n"+text);
        }
    }
}
function pickUp(iName, iType, iStat) {
    //Add item to inventory.
    pIn.push({"type": iType, "name": iName, "stat": iStat});
    if (iStat == null) {
        //The item is not usable currently.
        alert(`${pName} picked up a(n) ${iName}!`);
    } else {
        //The item is usable.
        alert(`${pName} picked up a(n) ${iName}! \n It does/has ${iStat} ${iType}.`);
    }
}
function calcAtk(atk, def) {
    var dam = atk;
    if (def >= atk) { dam = 0.25; } else {
        dam = atk-def;
    }
    if(putils.randomInt(0, 8)){
        dam *= 4;
    }
    return dam;
}
function damage(amt, message, type){
    win == null;
    if (type == `p`){
        pHp -= amt;
        if (pHp <= 0) {
            win == type;
            alert(`${message} \n GAME OVER`);
        }
    } else if (type == "e") {
        eHp -= amt;
        if (eHp <= 0){
            win == type;
        }
    }
}
function getXp (amt){
    pXp += amt;
    alert(`${pName} got ${amt} xp!`);
}
function useItem(index){
    let name = pIn[index].name;
    let type = pIn[index].type;
    let stat = pIn[index].stst;
    if (type == "atk"){
        atk = stat;
        alert(`Y${pName}ou equipped the ${name}.`);
    } else if (type == "def"){
        def = stat;
        alert(`${pName} equipped the ${name}.`);
    } else if (type == "food"){
        pHp += stat;
        alert(`${pName} ate the ${name}.`);
    } else {
        alert("That item is not currently useable.");
    }

}
function defEnemy(type, atk, def, drop){
    if(type == "Red Boko"){
        battle("Red Bokoblin", 13, 13, atk, def, drop, 5);
    }
    if(type == "Keese"){
        battle("Keese", 1, 1, atk, def, drop, 1);
    }
}
function item(name, type, stat){
    return {"name": name, "type": type, "stat": stat};
}











/*
██████╗ ██╗██╗  ██╗ █████╗ ███████╗    ██╗   ██╗████████╗██╗██╗     ███████╗
██╔══██╗██║██║ ██╔╝██╔══██╗██╔════╝    ██║   ██║╚══██╔══╝██║██║     ██╔════╝
██████╔╝██║█████╔╝ ███████║███████╗    ██║   ██║   ██║   ██║██║     ███████╗
██╔═══╝ ██║██╔═██╗ ██╔══██║╚════██║    ██║   ██║   ██║   ██║██║     ╚════██║
██║     ██║██║  ██╗██║  ██║███████║    ╚██████╔╝   ██║   ██║███████╗███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═════╝    ╚═╝   ╚═╝╚══════╝╚══════╝
                                                                            
========================================================
Pika's Utils
A "library" that makes your vanilla js life easier
========================== Usage =======================
Add the following to your <head> tag
<script src="https://cdn.jsdelivr.net/gh/pikapower9080/pikapower9080.github.io/assets/modules/utils.js"></script>
Check out the full documentation! https://pikapower9080.github.io/resources/putils-docs
Now you're good to go! Any embedded or external scripts can use the library!
Here's what you can do:
Both getElement(id) and g(id) can be used instead of document.getElementById()
GENERAL:
You can use putils.execute("console.log('i am some code')") to execute a string
You can use putils.randomInt(10, 20) to pick a random number between 10 and 20
You can use putils.createElementIn(type, parent) to create an element with a parent in one line of code
You can use putils.forcePrompt("This is the prompt message", "This is the default response", "This is the message that shows when you fail to enter a valid value") to create a prompt that will only accept real values
Dialog things:
You can use putils.alertModal("Message that supports <em>HTML formatting</em>", ["an", "optional", "list", "of", "classes", "for", "your", "dialog"]) to create a temporary dialog modal (not supported in some browsers!!!)
You can use putils.confirmModal((result) => { console.log(result) }, "Message that supports <em>HTML formatting</em>", "OK", "Cancel", "(ok button css)", "(cancel button css)", ["an", "optional", "list", "of", "classes", "for", "your", "dialog"]) to create a fancy confirm() modal. All options are optional and have default values.
You can use putils.toast("Message", <Lifetime in miliseconds (EX: 5000 for 5 seconds)>, <bool: Use default styling>, ["array", "of", "class", "names", "yougettheidea"])
You can style the alertModal with the class .putils-modal-alert
You can style the confirmModal with the class .putils-modal-confirm
You can style both modals with the class .putils-modal
You can style the toast with .putils-toast
ARRAY FUNCTIONS:
putils.array.pickrandom(array) - Pick a random value from an array
*/

// Faster ways to document.getElementById()
function getElement(id){
    if(!id) { console.error("Pika's Utils: Provide a value element id to get."); return undefined }
    return document.getElementById(id)
}
function g(id){
    if(!id) { console.error("Pika's Utils: Provide a value element id to get."); return undefined }
    return document.getElementById(id)
}

const putils = {}

// Pick a random number between x and y
putils.randomInt = function(min, max){
    if(!min || !max) { console.error("Pika's Utils: A valid min and max value must be provided. Usage: putils.randomInt(min, max)"); return undefined }
    // Failsafe
    if (min >= max){
        console.error("Pika's Utils: Tried to pick a number with a higher minimum than maximum! Usage: putils.randomInt(min, max)")
        return undefined
    }
    var number = Math.floor(Math.random() * max)
    if (number < min){
        number = putils.randomInt(min, max)
    }
    return number
}

// Easier ways to make a new element
putils.createElementIn = function(type, parent){
    if (!type) { console.error("Pika's Utils: An element type is required to create an element. Try something like \"div\". Usage: putils.createElementIn(type, parent)"); return undefined }
    if (!parent) { console.error("Pika's Utils: A parent is required to create a new element. If you don't want to set a parent, use document.createElement(type) instead."); return undefined }
    var newelement = document.createElement(type)
    parent.appendChild(newelement)
    return newelement
}
putils.createElementInBody = function(type){
    if (!type) { console.error("Pika's Utils: An element type is required to create an element in the body. Try something like \"div\". Usage: putils.createElementInBody(type)"); return undefined }
    var newelement = document.createElement(type)
    document.body.appendChild(newelement)
    return newelement
}

putils.array = {}

// Pick a random item from an array
putils.array.pickrandom = function(arr){
    if (!arr) { console.error("Pika's Utils: An array is required to pick a random value from. Usage: putils.array.pickrandom(array)"); return undefined }
    return arr[Math.floor(Math.random() * arr.length)]
}

// Execute code from a string
putils.execute = function(codestr){
    if (!codestr) { console.error("Pika's Utils: Provide a string to execute it. Usage: putils.execute(codestring (EX: 'console.log(\"hello world\")'))"); return undefined }
    new Function(codestr)()
}
putils.makeFunctionFromString = function(codestr){
    if (!codestr) { console.error("Pika's Utils: A valid string is required to make into a function. Usage: putils.makeFunctionFromString(codestring)"); return undefined }
    return new Function(codestr)
}

// A prompt that will refuse to accept blank values or pressing the cancel button
putils.forcePrompt = function(promptMessage, defaultValue, failMessage){
    if (!promptMessage) { console.error("Pika's Utils: A valid prompt message is required. Usage: putils.forcePrompt(prompt, defaultValue <optional>, failMessage <optional>)"); return undefined }
    if (defaultValue) {
        var response = prompt(promptMessage, defaultValue)
        if (response != null && response.trim() != "" && response.trim().length > 0) {
            return response
        } else {
            if (failMessage) { alert(failMessage) }
            var newResponse = putils.forcePrompt(promptMessage, defaultValue)
            if (newResponse != null && newResponse.trim() != "" && newResponse.trim().length > 0) {
                return newResponse
            }
        }
    } else {
        var response = prompt(promptMessage)
        if (response != null && response.trim() != "" && response.trim().length > 0) {
            return response
        } else {
            if (failMessage) { alert(failMessage) }
            var newResponse = putils.forcePrompt(promptMessage)
            if (newResponse != null && newResponse.trim() != "" && newResponse.trim().length > 0) {
                return newResponse
            }
        }
    }
}

// A fancier alert() using the dialog element
putils.alertModal = function(message, classNames){
    if(!message){ console.error("Pika's Utils: You must include a message for the dialog to show. (HTML formatting is supported) Usage: putils.alertModal(message, <array with a list of class names to apply>)") }
    var dialog = putils.createElementInBody("dialog")
    dialog.innerHTML = message
    if (classNames) {
        for (let i = 0; i < classNames.length; i++) {
            dialog.classList.add(classNames[i])
        }
    }
    dialog.classList.add("putils-modal")
    dialog.classList.add("putils-modal-alert")
    // Add more stuff to the modal
    var closebtn = putils.createElementIn("a", dialog)
    closebtn.setAttribute("style", "color: black; position: absolute; top: 0; right: 0; text-decoration: none; padding: 5px; padding-top: 1px;")
    closebtn.href = "#"
    closebtn.addEventListener("click", function(){
        dialog.close()
        dialog.remove()
    })
    dialog.addEventListener("close", function(){
        dialog.remove()
    })
    closebtn.innerHTML = "x"
    dialog.showModal()
    return dialog
}
// A fancier confirm() using the dialog element
putils.confirmModal = function(_callback, confirmMessage, okButtonText, cancelButtonText, okButtonStyle, cancelButtonStyle, classNames){
    if (!confirmMessage) { confirmMessage = "Are you sure?" }
    if (!okButtonText) { okButtonText = "Ok" }
    if (!cancelButtonText) { cancelButtonText = "Cancel" }
    var dialog = putils.createElementInBody("dialog")
    dialog.innerHTML = confirmMessage + "<br><br>"
    if (classNames) {
        for (let i = 0; i < classNames.length; i++) {
            dialog.classList.add(classNames[i])
        }
    }
    dialog.classList.add("putils-modal")
    dialog.classList.add("putils-modal-confirm")
    // Add more stuff to the modal
    var cancelBtn = putils.createElementIn("button", dialog)
    var okBtn = putils.createElementIn("button", dialog)
    okBtn.innerHTML = okButtonText
    if (okButtonStyle) {
        okBtn.setAttribute("style", okButtonStyle)
    }
    cancelBtn.innerHTML = cancelButtonText
    if (cancelButtonStyle) {
        cancelBtn.setAttribute("style", cancelButtonStyle)
    }
    dialog.addEventListener('cancel', (event) => {
        event.preventDefault(); // Prevent you from closing using the escape key in some browsers
    });
    okBtn.addEventListener("click", function(){
        dialog.close()
        dialog.remove()
        _callback(true)
        return true
    })
    cancelBtn.addEventListener("click", function(){
        dialog.close()
        dialog.remove()
        _callback(false)
        return false
    })
    dialog.showModal()
}
putils.toast = function(message, lifetime, useDefaultStyle, classNames){
    if (!message) message = "Toast!"
    if (!lifetime) lifetime = 5000
    var toast = putils.createElementInBody("span")
    if (classNames) {
        for (let i = 0; i < classNames.length; i++) {
            toast.classList.add(classNames[i])
        }
    }
    toast.classList.add("putils-toast")
    toast.innerHTML = message
    if (useDefaultStyle) {
        toast.setAttribute("style", "background-color: rgb(62, 62, 62); color: white; font-family: sans-serif; font-family: 13px; position: absolute; bottom: 0; left: 50%; margin-bottom: 35px; padding: 5px; transform: translateX(-50%); border-radius: 3px; opacity: 90%;")
    }
    setTimeout(() => {
        toast.remove()
    }, lifetime);
    return toast
}
