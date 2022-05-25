function stats() {
	var Str = Math.floor(Math.random() * 20);
	console.log("Strength: " + Str);
	if (Str === Number(0)) {
		var Str = 1;
	}

	var Dex = Math.floor(Math.random() * 20);
	console.log("Dexterity: " + Dex);
	if (Dex === Number(0)) {
		var Dex = 1
	} 
	

	var Con = Math.floor(Math.random() * 20);
	console.log("Constitution: " + Con);
	if (Con === Number(0)) {
		var Con = 1
	} 
	

	var Wis = Math.floor(Math.random() * 20);
	console.log("Wisdom: " + Wis);
	if (Wis === Number(0)) {
		var Wis = 1
	} 
	

	var Int = Math.floor(Math.random() * 20);
	console.log("Intelligence: " + Int);
	if (Int === Number(0)) {
		var Int = 1
	} 
	

	var Cha = Math.floor(Math.random() * 20);
	console.log("Charisma: " + Cha);
	if (Cha === Number(0)) {
		var Cha = 1
	} 

	//alert("Strength: " + Str + ", Dexterity: " + Dex + ", Constitution: " + Con + ", Wisdom: " + Wis + ", Intelligence: " + Int + ", Charisma: " + Cha);
	document.getElementById("str").innerHTML = "Strength: " + Str;
	document.getElementById("dex").innerHTML = "Dexterity: " + Dex;
	document.getElementById("con").innerHTML = "Constitution: " + Con;
	document.getElementById("wis").innerHTML = "Wisdom: " + Wis;
	document.getElementById("int").innerHTML = "Intelligence: " + Int;
	document.getElementById("cha").innerHTML = "Charisma: " + Cha; 
}



button.onclick = stats();
