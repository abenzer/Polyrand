var Donut_small : Transform;
var Donut_large : Transform;
var x_offset : int = 0;
var y_offset : int = 50;
function Start () {
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
        	var x_pos : float = x + Random.Range(-10.0f, 10.0f) + 5 + x_offset;
        	var y_pos : float = y + Random.Range(-10.0f, 10.0f) + 5;
        	var z_pos : float = Random.Range(-10.0f, 10.0f) + y_offset;
            Instantiate(Donut_small, Vector3 (x_pos, y_pos, z_pos), Quaternion.identity);
            Instantiate(Donut_large, Vector3 (x_pos, y_pos, z_pos + 10), Quaternion.identity);
        }
    }
}