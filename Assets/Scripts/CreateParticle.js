var particles: Transform;

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		Instantiate(particles, Vector3(0,10,0), Quaternion.identity);
	}
}