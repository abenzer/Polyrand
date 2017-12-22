var Donut_small : Transform;
var Donut_large : Transform;
var Donut_creme : Transform;
var x_offset : int = 0;
var y_offset : int = 50;

function Start () {
    for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
        	var x_pos : float = x + Random.Range(-10.0f, 10.0f) + 5 + x_offset;
        	var y_pos : float = y + Random.Range(-10.0f, 10.0f) + 5;
        	var z_pos : float = Random.Range(-10.0f, 10.0f) + y_offset;

        	var donutIndex : int = Random.Range(0, 3);
        	Debug.Log(donutIndex);
        	if (donutIndex == 0) {
            	Instantiate(Donut_small, Vector3 (x_pos, y_pos, z_pos), Quaternion.identity);
        	} else if(donutIndex == 1) {
            	Instantiate(Donut_large, Vector3 (x_pos, y_pos, z_pos + 20), Quaternion.identity);
            } else if(donutIndex == 2) { 
            	Instantiate(Donut_creme, Vector3 (x_pos, y_pos, z_pos + 20), Quaternion.identity);
            }

        }
    }
}