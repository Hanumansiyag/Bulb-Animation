const bulb = () =>{
	let bulb = document.getElementById('bulbdata');
	let bid = document.getElementById('lightid');
	if(bid.src.match('off')){
		bid.src = "on.png";
		bulb.innerHTML = "Light On !";
		bulb.style.color = "red";
	}
	else{
		bid.src = "off.jpg";
		bulb.innerHTML = "Light Off !";
		bulb.style.color = "black";
	}
}