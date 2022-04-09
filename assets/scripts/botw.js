var name, action, xp, lvl, hp, heals, atck_n, def_n, def, atck, c1, c2, c3, c4, c5, c6, rdm;
document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','https://cdn.jsdelivr.net/gh/pikapower9080/pikapower9080.github.io/assets/modules/utils.js');
function battle(ename, ehp, eatck, exp, canrun) {
	/*setup fight*/
	alert("A " + ename + " has attacked!");
	alert("BATTLE!\nLoadout:\nWeapon: " + atck_n + " Attack: " + atck + "\nArmor: " + def_n + " defense: " + def + "\nHeals: " + heals);
	alert("Enemy: \nHP: " + ehp + "\nAttack: " + eatck)
	exp = exp*ehp
	do {
		/*Enemy Attacks*/
		hp = hp - (eatck - def)
		alert(ename + " attacks doing " + (eatck - def) + " damage, leaving " + name + " with " + hp + " HP");
		/*Player Attacks*/
		action = "placeholderbeliek"
		action = prompt("what action to do? (fight/heal/item/run)")
		if (action == "fight") {
			ehp = ehp - atck
			alert(name + " attacks doing " + atck + " damage, leaving the " + ename + " with " + ehp + " HP");
		}
		if (action == "heal") {
			if (heals > 0) {
				hp = hp + 4
				heals = heals - 1
				alert(name + " used a heal and restored 4 HP, now they have: " + hp);
			}
			if (heals == 0) {
				alert(name + " attempted to use a heal but didnt have any");
			}
		}
		if (action == "run") {
			if (canrun==1) {
				ehp = 0
				exp = 0
			}
			if (canrun==0) {
				alert("You can't run away form this battle!")

			}
		}
	} while (ehp > 0);
	xp = xp + exp
	alert("You Defeated: " + ename + " and earned " + exp + " xp!");
	/*End Fight*/
};
function drop(pname, power, ptype) {
if (ptype == "armor") {
alert("You picked up, " + pname + "!\n " + power + " Defense!");
def = power
def_n = pname
}
if (ptype == "weapon") {
alert("You picked up, " + pname + "!\n " + power + " Attack!");
atck = power
atck_n = pname
}
if (ptype == "heal") {
alert("You picked up, " + power + " Heals!");
		heals = heals + power
}
};
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
if (c1 == "y") {
	alert("You pick up the mysterios device, and the door to the room starts unlocking.");
	alert("You you walk out the door but all you see is another room with boxes and a place to put in your Sheikah slate. you slot in your Sheikah slate");
	alert("The door leads you into a final room and you can see sunlight in the distance");
	c2 = prompt("You find a a Chest, Open it? (y/n)");
	if (c2 == "y") {
		drop("Rugged Armor", 1, "armor");
		drop("heal", 2, "heal");
	}

	alert("You walk outside and the brightness of the sun blinds you");
	c3 = prompt("You Trip On a stick and get back up. Grab The Stick? (y/n)");
	if (c3 == "y") {
			drop("Tree Branch", 1, "weapon");
	}
	battle("Bokoblin", 6, 2, 0.5, 1)
	drop("heal", 5, "heal");
	alert("you walk forward and hear the mysterious voice again.");
	alert(name + "... " + name + ", head for the point on your map marked on your Sheikah slate, it will show you the way.");
	c4 = prompt("After walking a while you find an axe, Pick it up? (y/n)");
	if (c4 == "y") {
				drop("Woodcutters Axe", 3, "weapon");
	}
	alert("You get close to the point and see a structure in the distance but there is a group of enemys")
	/*----------------------------------------------------------------------*/
	battle("Keese", 1, 1.1, 0.1, 0)
	/*----------------------------------------------------------------------*/
	battle("Keese", 1, 1.1, 0.1, 0)
	/*----------------------------------------------------------------------*/
	battle("Bokoblin", 6, 2, 0.5, 0)
	/*----------------------------------------------------------------------*/
	battle("Moblin", 18, 1.5, 3, 0)
	drop("Hylian Armor", 2,  "armor")
	drop("heal", 5, "heal")
	/*----------------------------------------------------------------------*/
		alert("After clearing the group of enemys you find a small structure with a place to insert your Sheikah Slate.")
	alert("You insert your Sheikah Slate and the structure starts rising into a great tower.")
	alert("-- GREAT TOWER --")
	alert(name + " ... " + name + " ... " + name + ", this is the great tower. over there you can see Hyrule Castle.")
	alert("I have been in there for the past 1000 years, fighting Ganon.")
	alert("Go find Impa and she can help you find out how to get into Hyrule Castle and defeat Ganon")
	alert("After the mysterious voice goes away you notice an old man talking to you")
	alert("''you might want to find your way off of this great tower. I have a deal for you, you defeat this lynel over there that has been bothering me and i will give you this paraglider.''")
	c5 = prompt("Take the old mans deal and defeat the lynel (1) or try to steal the paraglider form him (2)")
	if (c5=="1") {
	alert("You walk over to the lynel and engage in battle")
	battle("Red Lynel", 45, 3, 2.5, 0)
	drop("Lynel Sword", 5, "weapon")
	}
	if (c5=="2") {
	alert("You attempt to steal the paraglider from the man")
	battle("Old Man", 50, 4, 1.9, 0)
	drop("Old Cane", 4.5, "weapon")
}
}
/*you didnt grab the Sheikah slate*/
if (c1 == "n") {
	alert("You decide to sit there, unsure of what to do. After a while you start feeling hungry, you then fall asleep and never awake.\n\nGAME OVER");
}
