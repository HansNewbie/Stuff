private var player : GameObject;

function Awake() {
	player = GameObject.FindWithTag("player");
}

function Update() {
	if (Input.GetKey("d")) {
		player.transform.Translate(Vector3.right);
	}
	else if (Input.GetKey("a")) {
		player.transform.Translate(Vector3.left);
	}
	else if (Input.GetKey("w")) {
		player.transform.Translate(Vector3.forward);
	}
	else if (Input.GetKey("s")) {
		player.transform.Translate(Vector3.back);
	}
	
//	if (Input.GetKeyDown("space")) {
//		player.Translate(Vector3.up * 10.0);
//	}
}