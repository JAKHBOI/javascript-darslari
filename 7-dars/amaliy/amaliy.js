let on = document.getElementById('on');
let off = document.getElementById('off');
let img = document.getElementById('img');
let input = document.getElementById('input');

// input.addEventListener('input', (e) => {
// 	console.log(e.target.value);
// })

on.addEventListener('click', () => {
	img.src = './img/on.jpg';
})
off.addEventListener('click', () => {
	img.src = './img/off.jpg';
})

input.addEventListener('input', () => )