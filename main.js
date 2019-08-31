function getcode(event){
	document.getElementById("text").innerText = "" 
	document.getElementById("keycode").innerText = event.keyCode;
	if(event.keyCode == 32){
	document.getElementById("keyname").innerText = "Enter key is Space";
	}
	else{
	document.getElementById("keyname").innerText = `Enter key is ${event.key}`;
	}
}
window.addEventListener("keydown",getcode)
