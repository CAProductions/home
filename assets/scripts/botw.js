
var name, action, xp, lvl, b_hp, b_xp, b_name, b_atck, hp, heals, atck_n, def_n, def, atck, c1, c2, c3, c4, c5 ,c6;
atck = 0
atck_n = "none"
def = 0
def_n = "none"
hp = 12
xp = 0
heals = 5
name = prompt("What is your name, adventurer?");
alert("You awake to find yourself sleeping in a water bed in a dimly lit cavern");
alert(name + ", " + name + "...");
alert("Wake up, " + name + ", the world needs you.");
alert("Take this, It is a Sheikah Slate, It will guide you after your long slumber");
c1 = prompt("Take This mysterious ''Sheikah Slate''?(y/n)");
if (c1=="y") {
alert("You pick up the mysterios device, and the door to the room starts unlocking.");
alert("You you walk out the door but all you see is another room with boxes and a place to put in your Sheikah slate. you slot in your Sheikah slate");
alert("The door leads you into a final room and you can see sunlight in the distance");
c2 = prompt("You find a a Chest, Open it? (y/n)");
if (c2=="y"){
alert("You picked up, Ragged Armor!\n 1 Defense!");
def = 1
def_n = "Rugged Armor"
alert("You picked up, 2 Heals!");
heals = heals + 2
}
alert("You walk outside and the brightness of the sun blinds you");
c3 = prompt("You Trip On a stick and get back up. Grab The Stick? (y/n)");
if (c3=="y") {
alert("You picked up, Tree Branch\n 1 Attack!");
atck = 1
atck_n = "Tree Branch"
}
/*setup fight*/
b_name = "Bokoblin"
b_hp = 6
b_atck = 2
b_xp = (b_hp*0.25)
alert("A " + b_name + " has attacked!");
alert("BATTLE!\nLoadout:\nWeapon: " + atck_n + " Attack: " + atck + "\nArmor: " + def_n + " defense: " + def + "\nHeals: " + heals);
alert("Enemy: \nHP: " + b_hp + "\nAttack: " + b_atck)
do { 
	/*Enemy Attacks*/
	hp = hp - (b_atck - def)
	   alert(b_name + " attacks doing " + (b_atck - def) + " damage, leaving " + name + " with " + hp + " HP");
	/*Player Attacks*/
action = "placeholderbeliek"
action = prompt("what action to do? (fight/heal/run)")
if(action=="fight"){
	b_hp = b_hp - atck
	   alert(name + " attacks doing " + atck + " damage, leaving the " + b_name + " with " + b_hp + " HP");
}
if(action=="heal"){
if(heals > 0){
hp = hp + 4
heals = heals - 1
alert(name + " used a heal and restored 4 HP, now they have: " + hp);
}
if(heals==0){
alert(name + " attempted to use a heal but didnt have any");
}
}
if(action=="run"){
	b_hp = "-333333"
	b_xp = 0
	}
} while (b_hp > 0);
xp = xp + b_xp
alert("You Defeated: " + b_name + " and earned " + b_xp + " xp!");
/*End Fight*/
alert("you walk forward and hear the mysterious voice again.");
alert(name + "... " + name + ", head for the point on your map marked on your Sheikah slate, it will show you the way.");
c4 = prompt("After walking a while you find an axe, Pick it up? (y/n)");
if (c4=="y") {
alert("You picked up, Woodcutters Axe\n 3 Attack!");
atck = 3
atck_n = "Woodcutters Axe"
}/*you didnt grab the Sheikah slate*/
}
if (c1=="n") {
alert("You decide to sit there, unsure of what to do. After a while you start feeling hungry, you then fall asleep and never awake.\n\nGAME OVER");
}
