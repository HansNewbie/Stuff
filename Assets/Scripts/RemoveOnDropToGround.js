function Update() {
	if (Input.GetMouseButtonDown(1)) {
		Destroy(gameObject);
	}
}

function OnCollisionEnter (collision : Collision) {
	if (collision.gameObject.tag == "ground") {
		Destroy(gameObject, 0.2);
	}
}