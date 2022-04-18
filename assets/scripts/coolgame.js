/****
Setup
****/
document.getElementsByTagName('head')
[0].appendChild(document.createElement('script')).setAttribute('src','https://cdn.jsdelivr.net/gh/pikapower9080/pikapower9080.github.io/assets/modules/utils.js');
var pMHp, pHp, pIn, response, pName, pXp, pAtk, pDef, win;
pMHp = 3;
pHp  = 3;
/****
Story
****/
response = putils.forcePrompt("Start Game (y/n)?", "y", "Enter a valid answer.");
pName = putils.forcePrompt("What is your name, adventurer?", "Link", "Enter a valid answer.");
alert("You wake up in a dark room.");
if (putils.forcePrompt("You see a strange device. Pick it up (y/n)?", "y", "Enter a valid answer.") == "y") {
    pickUp("Sheikah Slate", "magic", null);

} else {
    damage(999999999999999999999999999999999, "You didn't pick up the Slate, and it killed you.", "p")
}

/********
FUNCTIONS
********/
function battle(eName, eHp, eMHp, eAtk, eDef, eDrop, eXp) {
    //Start
    win = null;
    alert("A "+eName+" has attacked! It has "+eAtk+" atk and "+eDef+"def.");
    while (!win) {
        //Enemy Attack
        damage(calcAtk(eAtk, pDef), eName+" attacks, doing "+calcAtk(eAtk, pDef)+" damage. "+pName+" is now at "+pHp+"/"+pMHp+" health.", "p");
        if (win) {
            //Player Dead
        }
        //Player attacks
        damage(calcAtk(pAtk, eDef), pName+" attacks, doing "+calcAtk(pAtk, eDef)+" damage. "+eName+" is now at "+eHp+"/"+eMHp+" health.", "e");
        if (win) {
            //Enemy Dead
            alert("You killed the "+eName+"!");
            pickUp(eDrop.name, eDrop.type, eDrop.stat);
            getXp(eXp);
        }
    }
}
function pickUp(iName, iType, iStat) {
    //Add item to inventory.
    pIn.push({"type": iType, "name": iName, "stat": iStat});
    if (iStat == null) {
        //The item is not usable currently.
        alert(pName+" picked up a(n) "+iName+"!");
    } else {
        //The item is usable.
        alert(pName+" picked up a(n) "+iName+"!"+" \n It does/has "+iStat+" "+iType+".");
    }
}
function calcAtk(atk, def) {
    var dam = atk;
    if (def >= atk) { dam = 0.25; } else {
        dam = atk-def;
    }
    return dam;
}
function damage(amt, message, type){
    win == null;
    if (type == "p"){
        pHp -= amt;
        if (pHp <= 0) {
            win == type;
            alert(message+"\n GAME OVER");
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
    alert(pName+" got "+amt+" xp!");
}
