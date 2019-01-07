

$('#add-name').click(function(){
	$('#name').append($('#name-chosen').val())
});


let age = 0;
let hunger = 0;
let sleepness = 0;
let boredom = 0;

// Timer function
 timer = () =>{
	hunger += 10
	sleepness += 5
	boredom += 5
};

setInterval(timer(), 1000);


//Buttons to reset timers
document.getElementById('feed')
document.getElementById('sleep')
document.getElementById('pet')


// Function when tamagotchi dies
if (hunger>=100 || sleepness>=100 || boredom>=100) {
	document.getElementById('char').src="image/youdied.jpg";
};


//Change progress bar
document.getElementById('hunger').innerHTML = hunger + '%';
document.getElementById('sleepness').innerHTML = sleepness + '%';
document.getElementById('boredom').innerHTML = boredom + '%';




