var rotateSpeed = 25.0;
var speed = 50.0;
 
function Update() {
	var transAmount = speed * Time.deltaTime;
	var rotateAmount = rotateSpeed * Time.deltaTime;
 
	if (Input.GetKey("down")) {
		transform.Rotate(rotateAmount, 0, 0);	
	}

	if (Input.GetKey("up")) {
		transform.Rotate(-rotateAmount, 0, 0);	
	}

	if (Input.GetKey("left")) {
		transform.Rotate(0, -rotateAmount, 0);
	}

	if (Input.GetKey("right")) {
		transform.Rotate(0, rotateAmount, 0);
	}
	 
	if (Input.GetKey ("a")) {
		transform.Translate(0, 0, transAmount);
	}
			
	if (Input.GetKey ("q")) {
		transform.Translate(0, 0, (transAmount * 2));
	}
 
}