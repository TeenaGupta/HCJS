alert("Hii! Everyone Welcome to my website of HCJS(HTML, CSS, JAVASCRIPT)");

//////////// CLOCK  /////////////

var diallines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];

for(var i = 1; i < 60; i++) {
	clockE1 += "<div class='diallines'></div>";
	diallines[i] = "rotate(" + 6 * i + "deg)";
}

function clock(){
	var weekday = new Array(7) ;
	let d = new Date();
	let s =  d.getSeconds() / 60; 
	let m =  (d.getMinutes() + s) / 60;
	let h =  (d.getHours() + m) / 12;
	let date = d.getDate();
	let month = d.getMonth() +1;
	let year = d.getFullYear();

	hE1 = document.querySelector('.hour-hand'),
	mE1 = document.querySelector('.minute-hand'),
	sE1 = document.querySelector('.second-hand'),
	dateE1 = document.querySelector('.date'),
	dayE1 = document.querySelector('.day');

	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var day = weekday[d.getDay()];
	sE1.style.transform = "rotate(" + (s *360) + "deg)"
	mE1.style.transform = "rotate(" + (m *360) + "deg)"
	hE1.style.transform = "rotate(" + (h *360) + "deg)"
	dateE1.innerHTML = date+"/"+month+"/"+year;
	dayE1.innerHTML = day;
}


setInterval(clock, 1000);


///////////// INFORMATION /////////////////

function myFun() {
	var person = prompt("What Is Your Name?");
	if (person != null) {
	document.getElementById("info").innerHTML = 
	"Hello " + person + "!";
	}
}

/////////// ANIMATED DATA ENTRY //////////////

const mouth = document.querySelector('.avatar_mouth');
const avatar = document.querySelector('.avatar');
const container = document.querySelector('.container');
const eyeL = document.querySelector(".avatar_pupil--left");
const eyeR = document.querySelector(".avatar_pupil--right");

document.querySelector('#name').addEventListener('input', (ev) => {
	if (ev.target.value != "") {container.classList.add('visible');}
	else {container.classList.remove('visible');}
});

document.querySelector('#address').addEventListener('input',(ev) => {
	if (ev.target.value != '') {container.classList.add('address');}
	else {container.classList.remove('address');}
});

document.querySelector('#female').addEventListener('change', (ev) => {
	avatar.classList.remove('male');
	avatar.classList.add('female');
});

document.querySelector('#male').addEventListener('change', (ev) => {
	avatar.classList.remove('female');
	avatar.classList.add('male');
});

document.querySelector('#other').addEventListener('change', (ev) => {
	avatar.classList.remove('female', 'male');
	avatar.classList.add('avatar');
});


document.querySelector('#email').addEventListener('input', (ev) => {
	if (ev.target.value != "") {container.classList.add('mouth');}
	else {container.classList.remove('mouth');}
});

	const handleEye = (eye, event) => {
	const b = eye.getBoundingClientRect();
	const x = (b .left) + (eye.clientWidth);
	const y = (b .top) + (eye.clientHeight);
	const rad = Math.atan2(event.pageX - x, event.pageY - y);
	const rot = (rad * (180 / Math.PI) * -6) + 270;
	eye.style.transform = "rotate("+rot+"deg)";
	}

	document.querySelector('body').addEventListener('mousemove', (ev) => {
	handleEye(eyeL, ev);
	handleEye(eyeR, ev);
});
