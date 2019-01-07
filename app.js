
$('#add-name').click(function(){
	document.getElementById('name').innerHTML = "Jamal"
});


let age = 0;
let hunger = 0;
let sleepness = 0;
let boredom = 0;

// Timer function
 timer = () =>{
	hunger += 10
	sleepness += 1
	boredom += 1
};

setInterval(timer(), 1000);


//Buttons to reset timers
document.getElementById('')
document.getElementById('')
document.getElementById('')


// Function when tamagotchi dies
if (hunger>=100 || sleepness>=100 || boredom>=100) {
	document.getElementById('char').src="image/youdied.jpg";
};


//Change progress bar
document.getElementById('hunger').innerHTML = hunger + '%';
document.getElementById('sleepness').innerHTML = sleepness + '%';
document.getElementById('boredom').innerHTML = boredom + '%';




