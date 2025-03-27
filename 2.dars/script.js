// O'zgaruvchilar

var ism	= "jakhboi"; // string
let yosh = 20; // number
const PI = 3.14; // number
let mevalar = ["olma", "anor", "uzum", 1000]; // object
let ochiq = false; // boolean;

// davlat object 
let davlat = { 
 // viloyat object
	samarqand: {
	// tuman object 
		ishtixon: [
		 "yangijoy", // mahalla
		 "yangibog'", // mahalla
		 'guliston', // mahalla
	    ],
	    payariq: [
	    	"maxallaZor1",
	    	"maxallaZor2",
	    	"maxallaZor3"
	    ],
	},

	toshkent: { // viloyat
		zangota: [
			"bulungur", 
			 "sergili",
			 "qibray"

		],
		},
	qashqadaryo:{
		koson: [
			"maxalla1",
			"maxalla2",
			"maxalla3"
		],
	},
};

// Malumot turlari
// malumot turini tekshirish uchun tupeof operatoridan foydalanamiz

// index bilan elementni chiqarish
// console.log(typeof odam); // olma
console.log(davlat) 