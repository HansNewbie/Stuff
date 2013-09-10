﻿var particles: Transform;

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		Debug.Log("Pressed left click.");
		Instantiate(particles, Vector3(0,10,0), Quaternion.identity);
	}
	if (Input.GetMouseButtonDown(1)) {
		Debug.Log("Pressed right click.");
	}
	if (Input.GetMouseButtonDown(2)) {
		Debug.Log("Pressed middle click.");
	}
}