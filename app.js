
$('#add-name').click(function(){
	let task = $('#add-name').val()
	console.log(task);
});


class tamagotchi {
	constructor (name, age, hunger, sleepness, boredom) {
		this.name = name
		this.age = age,
		this.hunger = hunger,
		this.sleepness = sleepness,
		this.boredom = boredom
	}
};



let age = 0;
let hunger = 1;
let sleepness = 1;
let boredom = 1;
let name = "";



let goku = new tamagotchi (name, age, hunger, sleepness, boredom)


console.log(goku);