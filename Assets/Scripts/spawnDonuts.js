var canCallFunction : boolean = true;
var donutCount : int = 0;
var Donut_small : Transform;
var Donut_large : Transform;
var Donut_creme : Transform;

//config
var configSpeed : float = .05;  

function Start() {
}

function Update() {
	if(canCallFunction) {
   		AddDonut();
		Wait(configSpeed);
	}
	donutCount++;
} 

function AddDonut() {
	x = 0;
	y = 30;
	var x_pos : float = x + Random.Range(-2.0f, 2.0f);
	var y_pos : float = y + Random.Range(-2.0f, 2.0f);
	var z_pos : float = Random.Range(-2.0f, 2.0f);

	var donutIndex : int = Random.Range(0, 3);
    if (donutIndex == 0) {
    	Instantiate(Donut_small, Vector3 (x_pos, y_pos, z_pos), Quaternion.identity);
    } else if(donutIndex == 1) {
		Instantiate(Donut_large, Vector3 (x_pos, y_pos, z_pos), Quaternion.identity);
	} else if(donutIndex == 2) { 
    	//Instantiate(Donut_creme, Vector3 (x_pos, y_pos, z_pos), Quaternion.identity);
	}
}


// delay
function Wait(time : float) {
	canCallFunction= false;
	yield new WaitForSeconds(time);
	canCallFunction= true;
}
