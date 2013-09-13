var player = transform;

function Update() {
	if (Input.GetKey("d")) {
		player.Translate(Vector3.right);
	}
	else if (Input.GetKey("a")) {
		player.Translate(Vector3.left);
	}
	else if (Input.GetKey("w")) {
		player.Translate(Vector3.forward);
	}
	else if (Input.GetKey("s")) {
		player.Translate(Vector3.back);
	}
	
//	if (Input.GetKeyDown("space")) {
//		player.Translate(Vector3.up * 10.0);
//	}
}