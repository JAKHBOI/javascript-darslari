let username = document.getElementById('username');
let password = document.getElementById('password');
let massage = document.getElementById('massage');

const DB = {
	username: 'admin',
	password: '123'
}



function sumbit() {
	if (username.value == DB.username && password.value ==  DB.password) {
		localStorage.setItem('username', DB.username);
		localStorage.setItem('password', DB.password);
		window.location.href = "admin.html";
		
	}else{
		massage.innerText = "Login yoki parol xato";
	}
}


//  LocalStorage bilan ishlash

// malumotni yuklash
// localStorage.setItem('Login', 'admin');

// malumotni olish 

// let login = localStorage.getItem('Login');
// console.log(login);

//  Mallumotni o'chirish
// localStorage.removeItem('Login');

//  Barcha ma'lumotlarni tozalash 
// localStorage.clear();